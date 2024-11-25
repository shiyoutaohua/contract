const hre = require("hardhat");
const { vars } = require("hardhat/config");

// Owner
const OWNER_PRIKEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const OWNER_PUBKEY = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
// Contract address
const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function main() {
    const network = hre.config.networks.localhost;
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
    let r = await counter.add(10);
    await printCnt();
    console.info(r);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
