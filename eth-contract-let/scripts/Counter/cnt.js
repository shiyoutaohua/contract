require('dotenv').config();
const hre = require("hardhat");

// Owner
const OWNER_PRIKEY = process.env.OWNER_PRIKEY;
const OWNER_PUBKEY = process.env.OWNER_PUBKEY;
// Contract address
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function main() {
    const network = hre.config.networks.localhost;
    const provider = await new hre.ethers.getDefaultProvider(network.url);
    let balance = await provider.getBalance(OWNER_PUBKEY);
    console.info(`Balance of ${OWNER_PUBKEY}: ${hre.ethers.formatEther(balance)} ETH`);

    const signer = new hre.ethers.Wallet(OWNER_PRIKEY, provider);
    const counter = await hre.ethers.getContractAt('Counter', CONTRACT_ADDRESS, signer);
    let cnt = await counter.cnt();
    console.info(`Contract[Counter] cnt: ${cnt}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
