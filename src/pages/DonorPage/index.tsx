import { useEffect } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import * as S from "./styles";

function DonorPage(): JSX.Element {
  const connect = async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        44787: "https://alfajores-forno.celo-testnet.org",
        42220: "https://forno.celo.org",
      },
    });

    await provider.enable();
    const web3 = new Web3(provider as any);
    const kit = newKitFromWeb3(web3);

    [kit.defaultAccount] = provider.accounts;

    provider.on("accountsChanged", (accounts: any) => {
      console.log(accounts);
    });

    // this.setState({provider, kit})
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <S.Container>
      <h1>DonorPage</h1>
    </S.Container>
  );
}

export default DonorPage;
