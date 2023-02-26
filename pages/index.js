import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

import { WalletSignatureContext } from "../context/contractContext";
import { useContext } from "react";

export default function Home() {

  const {title} = useContext(WalletSignatureContext)

  return (
    <div className={styles.container}>
      {title}
    </div>
  );
}
