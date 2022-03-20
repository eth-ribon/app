import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { CeloContract, ContractKit, newKitFromWeb3 } from "@celo/contractkit";
import EducaAbi from "utils/abis/Educa.json";
import { Accounts } from "@celo/contractkit/lib/generated/Accounts";
import * as S from "./styles";

function DonorPage(): JSX.Element {
  const [userAccounts, setUserAccounts] = useState<Accounts>();
  const [mainKit, setMainKit] = useState<ContractKit>();
  const [mainProvider, setMainProvider] = useState<WalletConnectProvider>();

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

  const sendcUSD = async () => {
    if (!mainKit) return;

    const amount = mainKit.web3.utils.toWei("0.001", "ether");
    await mainKit.setFeeCurrency(CeloContract.StableToken);

    const stabletoken = await mainKit.contracts.getStableToken();
    const tx = await stabletoken
      ?.transfer(mainKit.defaultAccount || "", amount)
      .send();
    const receipt = await tx.waitReceipt();

    console.log(receipt);
  };

  const approveContract = async () => {
    if (!mainKit) return;

    const amount = mainKit.web3.utils.toWei("0.1", "ether");

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

    const amount = mainKit.web3.utils.toWei("0.001", "ether");
    await mainKit.setFeeCurrency(CeloContract.StableToken);

    const contract = new mainKit.connection.web3.eth.Contract(
      EducaAbi.abi as any,
      "0xf58121351c85ca4DB4867C7F7Fe17b11C4B2c953",
    );

    try {
      const response = await contract.methods
        .addDonationPoolBalance(amount)
        .call();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <S.Title>FUNDO</S.Title>
      <S.Subtitle>Contribua para que crianças continuem aprendendo</S.Subtitle>
      <S.Text>Saldo do fundo</S.Text>
      <button type="button" onClick={connect}>
        Conectar
      </button>
      <button type="button" onClick={sendcUSD}>
        Send cUSD
      </button>
      <button type="button" onClick={contractIteration}>
        Interact
      </button>
      <button type="button" onClick={approveContract}>
        Approve
      </button>
      <p>{mainKit?.defaultAccount}</p>
    </S.Container>
  );
}

export default DonorPage;
