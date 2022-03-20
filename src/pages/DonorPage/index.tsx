import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { CeloContract, ContractKit, newKitFromWeb3 } from "@celo/contractkit";
import EducaAbi from "utils/abis/Educa.json";
import { Accounts } from "@celo/contractkit/lib/generated/Accounts";
import * as S from "./styles";
import CardBlank from "../../components/moleculars/cards/CardBlank";
import Button from "../../components/atomics/Button";

function DonorPage(): JSX.Element {
  const [userAccounts, setUserAccounts] = useState<Accounts>();
  const [mainKit, setMainKit] = useState<ContractKit>();
  const [mainProvider, setMainProvider] = useState<WalletConnectProvider>();
  const [donationAmount, setDonationAmount] = useState("0.1");

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
    console.log(mainKit?.web3.utils.toWei("0.001", "ether"));
  }, [mainKit, mainProvider]);

  useEffect(() => {
    if (!mainKit?.defaultAccount) connect();
  }, []);

  const approveContract = async () => {
    if (!mainKit) return;

    const amount = mainKit.web3.utils.toWei("100.1", "ether");

    try {
      const stabletoken = await mainKit.contracts.getStableToken();

      const a = await stabletoken
        .approve("0xf58121351c85ca4DB4867C7F7Fe17b11C4B2c953", amount)
        .send();

      console.log(a);
    } catch (e) {
      console.log(e);
    }
  };

  const contractIteration = async () => {
    if (!mainKit) return;

    const amount = mainKit.web3.utils.toWei(donationAmount, "ether");
    await mainKit.setFeeCurrency(CeloContract.StableToken);

    const contract = new mainKit.connection.web3.eth.Contract(
      EducaAbi.abi as any,
      "0xf58121351c85ca4DB4867C7F7Fe17b11C4B2c953",
    );

    try {
      const response = await contract.methods
        .addDonationPoolBalance(amount)
        .send({ from: contract.defaultAccount });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
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
      <S.Subtitle>Contribua para que crianças continuem aprendendo</S.Subtitle>
      <S.Text>Saldo do fundo</S.Text>
      <CardBlank>
        <S.FundText>
          191.759,76 <S.FundTextCoin>cREAL</S.FundTextCoin>
        </S.FundText>
      </CardBlank>
      <S.BottomContainer>
        <S.Text>Contribua</S.Text>
        <CardBlank>
          <S.InnerContainer>
            <S.Input
              type="text"
              placeholder="valor em cREAL"
              value={donationAmount}
              onChange={(e: any) => setDonationAmount(e.target.value)}
            />
            <Button text="Contribuir" onClick={contractIteration} />
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
