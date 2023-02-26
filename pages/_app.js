import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { WalletSignatureProvider } from "../context/contractContext";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const MyApp = ({ Component, pageProps }) => (
  <ThirdwebProvider activeChain={activeChain}>
    <WalletSignatureProvider>
      <Component {...pageProps} />
    </WalletSignatureProvider>
  </ThirdwebProvider>
);

export default MyApp;
