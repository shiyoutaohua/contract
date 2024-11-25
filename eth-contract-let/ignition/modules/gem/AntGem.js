const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AntGemModule", (m) => {

    const antGem = m.contract("AntGem", [], {});

    return { antGem };

});
