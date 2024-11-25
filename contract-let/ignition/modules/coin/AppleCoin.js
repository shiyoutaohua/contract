const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AppleCoinModule", (m) => {

    const appleCoin = m.contract("AppleCoin", [10_000_000_000_000_000_000n], {});

    return { appleCoin };

});
