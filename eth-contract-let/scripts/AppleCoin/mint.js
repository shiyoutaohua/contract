require('dotenv').config();
const hre = require("hardhat");

// Owner
const OWNER_PRIKEY = process.env.OWNER_PRIKEY;
const OWNER_PUBKEY = process.env.OWNER_PUBKEY;
// Network
const NETWORK = 'polygon-mainnet';
// Contract
const CONTRACT_NAME = 'AppleCoin';
const CONTRACT_ADDRESS = '0xF9baBc0076cB8c0768F060AFff446Fbc3e40d62e';

async function main() {
    const network = hre.config.networks[NETWORK];
    const provider = await new hre.ethers.getDefaultProvider(network.url);

    const signer = new hre.ethers.Wallet(OWNER_PRIKEY, provider);
    const contract = await hre.ethers.getContractAt(CONTRACT_NAME, CONTRACT_ADDRESS, signer);

    const decimals = await contract.decimals();
    console.info(decimals);
    const receipt = await contract.mint(OWNER_PUBKEY, 10_000_000_000_000_000_000n);
    console.info(receipt);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
