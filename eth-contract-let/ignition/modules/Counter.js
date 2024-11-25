const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CounterModule", (m) => {

    const cnt = 10000;

    const counter = m.contract("Counter", [cnt], {});

    return { counter };

});
