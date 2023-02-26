import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = "2F1qIdHyCMJlino14S1jAFsJlLb";
const projectSecretKey = "e8994e6e90650c855c870e3812e3a33a";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subDomain = "https://toob1ass.infura-ipfs.io";

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

// Internal Import
import { contractAddress, walletABI } from "./constants";

// Fetch contract function
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(contractAddress, walletABI, signerOrProvider);

// Connecting with contract
const connectWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const WalletSignatureContext = React.createContext();

export const WalletSignatureProvider = ({ children }) => {
  const title = "Multi Signature Wallet";
  return (
    <WalletSignatureContext.Provider value={{ title }}>
      {children}
    </WalletSignatureContext.Provider>
  );
};
