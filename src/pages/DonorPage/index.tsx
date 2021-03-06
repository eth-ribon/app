import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { CeloContract, ContractKit, newKitFromWeb3 } from "@celo/contractkit";
import EducaAbi from "utils/abis/Educa.json";
import { Accounts } from "@celo/contractkit/lib/generated/Accounts";
import * as S from "./styles";
import CardBlank from "../../components/moleculars/cards/CardBlank";
import Button from "../../components/atomics/Button";
import ModalIcon from "../../components/moleculars/modals/ModalIcon";
import CheckIcon from "../../assets/icons/check-icon.svg";

function DonorPage(): JSX.Element {
  const contractAddress = "0xa824DB66eb16B2a5dC94fDa40AEDD6f70D263544";

  const [userAccounts, setUserAccounts] = useState<Accounts>();
  const [mainKit, setMainKit] = useState<ContractKit>();
  const [mainProvider, setMainProvider] = useState<WalletConnectProvider>();
  const [donationAmount, setDonationAmount] = useState("");
  const [contractBalance, setContractBalance] = useState("");
  const [donationButtonDisabled, setDonationButtonDisabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const connect = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
      },
    });

    await provider.enable();
    const web3 = new Web3(provider as any);
    const kit = newKitFromWeb3(web3);

    [kit.defaultAccount] = provider.accounts;

    provider.on("accountsChanged", (accounts: any) => {
      console.log(accounts);
      setUserAccounts(accounts);
    });

    setMainProvider(provider);
    setMainKit(kit);
  };

  useEffect(() => {
    console.log(mainKit, mainProvider);
    console.log(userAccounts);
    console.log(mainKit?.defaultAccount);
    console.log(mainKit?.web3.utils.toWei("0.001", "ether"));
  }, [mainKit, mainProvider]);

  useEffect(() => {
    if (!mainKit?.defaultAccount) connect();
  }, [mainKit]);

  const getContractBalance = async () => {
    if (!mainKit) return;

    const stabletoken = await mainKit.contracts.getStableToken();

    try {
      const response = await stabletoken.balanceOf(contractAddress);

      console.log(response);
      setContractBalance(
        mainKit.connection.web3.utils.fromWei(response.toString()),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getContractBalance();
  }, [mainKit]);

  const approveContract = async () => {
    if (!mainKit) return;

    const amount = mainKit.web3.utils.toWei("100.1", "ether");

    try {
      const stabletoken = await mainKit.contracts.getStableToken();

      const a = await stabletoken.approve(contractAddress, amount).send();

      console.log(a);
    } catch (e) {
      console.log(e);
    }
  };

  const donateThroughContract = async () => {
    if (!mainKit) return;

    setDonationButtonDisabled(true);
    const amount = mainKit.web3.utils.toWei(donationAmount, "ether");
    await mainKit.setFeeCurrency(CeloContract.StableToken);

    const contract = new mainKit.connection.web3.eth.Contract(
      EducaAbi.abi as any,
      contractAddress,
    );

    try {
      const response = await contract.methods
        .addDonationPoolBalance(amount)
        .send({ from: contract.defaultAccount });

      console.log(response);
      getContractBalance();
      setModalVisible(true);
      setDonationAmount("");
    } catch (e) {
      console.log(e);
    } finally {
      setDonationButtonDisabled(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Container>
      <ModalIcon
        onClose={closeModal}
        visible={modalVisible}
        primaryButtonText="Ok"
        primaryButtonCallback={closeModal}
        icon={CheckIcon}
        body="Contribui????o enviada!"
      />
      <S.Title>FUNDO</S.Title>
      <S.ConnectWalletContainer>
        <Button
          text={
            mainKit?.defaultAccount
              ? `${mainKit?.defaultAccount?.slice(0, 7)}...`
              : "connect wallet"
          }
          onClick={connect}
          outline
        />
      </S.ConnectWalletContainer>
      <S.Subtitle>Contribua para que crian??as continuem aprendendo</S.Subtitle>
      <S.Text>Saldo do fundo</S.Text>
      <CardBlank>
        <S.FundText>
          {contractBalance.slice(0, 7)} <S.FundTextCoin>cDollar</S.FundTextCoin>
        </S.FundText>
      </CardBlank>
      <S.BottomContainer>
        <S.Text>Contribua</S.Text>
        <CardBlank>
          <S.InnerContainer>
            <S.Input
              type="text"
              placeholder="valor em cDollar"
              value={donationAmount}
              onChange={(e: any) => setDonationAmount(e.target.value)}
            />
            <Button
              text="Contribuir"
              onClick={donateThroughContract}
              disabled={donationButtonDisabled}
            />
          </S.InnerContainer>
        </CardBlank>

        <button type="button" onClick={approveContract}>
          Approve
        </button>
      </S.BottomContainer>
    </S.Container>
  );
}

export default DonorPage;
