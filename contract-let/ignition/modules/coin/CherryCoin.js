const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Owner
const OWNER_PRIKEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
const OWNER_PUBKEY = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

module.exports = buildModule("CherryCoinModule", (m) => {

    const cherryCoin = m.contract("CherryCoin", [10_000_000_000_000_000_000n, OWNER_PUBKEY], {});

    return { cherryCoin };

});
