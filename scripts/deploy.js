const hre = require("hardhat");

async function main() {
  const MultiSignatureWallet = await hre.ethers.getContractFactory("MultiSignatureWallet");

  const accounts = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  ];
  const required = 3;
  const multisignaturewallet = await MultiSignatureWallet.deploy(accounts, required);

  await multisignaturewallet.deployed();

  console.log(
    `Wallet Address ${multisignaturewallet.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
