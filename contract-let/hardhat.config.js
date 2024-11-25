require('@nomicfoundation/hardhat-toolbox');

// JSON-PRC Rrovider
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
// Owner
const OWNER_PRIKEY = vars.get("OWNER_PRIKEY");
const OWNER_PUBKEY = vars.get("OWNER_PUBKEY");

module.exports = {
  solidity: '0.8.24',
  networks: {
    'polygon-mainnet': {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [OWNER_PRIKEY],
    },
  },
};

// 自定义任务
task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    const address = account.address;
    const balance = await hre.ethers.provider.getBalance(address)
    console.log(`${address}: ${ethers.formatEther(balance)} ETH`);
  }
});
