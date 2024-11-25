require('dotenv').config();
const hre = require("hardhat");

// Owner
const OWNER_PRIKEY = process.env.OWNER_PRIKEY;
const OWNER_PUBKEY = process.env.OWNER_PUBKEY;
// Contract address
const CONTRACT_ADDRESS = '0xe1C286E3562BD665666309FB87790BdABa155EBc';

async function main() {
    const network = hre.config.networks['polygon-mainnet'];
    const provider = await new hre.ethers.getDefaultProvider(network.url);
    let balance = await provider.getBalance(OWNER_PUBKEY);
    console.info(`Balance of ${OWNER_PUBKEY}: ${hre.ethers.formatEther(balance)} ETH`);

    const signer = new hre.ethers.Wallet(OWNER_PRIKEY, provider);
    const counter = await hre.ethers.getContractAt('Counter', CONTRACT_ADDRESS, signer);

    const printCnt = async function () {
        let cnt = await counter.cnt();
        console.info(`Contract[Counter] cnt: ${cnt}`);
    }

    await printCnt();
    let r = await counter.sub(10);
    await printCnt();
    console.info(r);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
