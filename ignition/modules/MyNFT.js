const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat")

module.exports = buildModule("MyNFTModule", async (m) => {
  const [deployer] = await ethers.getSigners();

  const myNFT = m.contract("MyNFT", [deployer]);

  return { myNFT };
});
