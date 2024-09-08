const { vars } = require("hardhat/config");
require("@nomiclabs/hardhat-ethers"); // Ensure this is the correct package
// const { API_URL, PRIVATE_KEY } = process.env;

const API_URL = vars.get("API_URL");
const rpcUrl = vars.get("rpcUrl");
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    "lisk-sepolia": {
      url: rpcUrl,
      accounts: [PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
        "lisk-sepolia": "123",
    },
    customChains: [
        {
            network: "lisk-sepolia",
            chainId: 4202,
            urls: {
                apiURL: "https://sepolia-blockscout.lisk.com/api",
                browserURL: "https://sepolia-blockscout.lisk.com/",
            },
        },
    ],
  }
};