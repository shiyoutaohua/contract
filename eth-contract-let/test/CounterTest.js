const hre = require("hardhat");

const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("CounterTest", function () {

    async function snapshot() {
        const initialCnt = 10000;

        const [owner, otherAccount] = await hre.ethers.getSigners();

        const counter = await hre.ethers.deployContract("Counter", [initialCnt], {});

        return { counter, owner, otherAccount, initialCnt };
    }

    describe("Deployment", function () {
        it("Should set the right cnt", async function () {
            const { counter, owner, initialCnt } = await loadFixture(snapshot);
            expect(await counter.cnt()).to.equal(initialCnt);
            // console.info(await counter.cnt());
            // console.info(await counter.show());
        });
    });

    describe("Add", function () {
        it("add n", async function () {
            const { counter, owner, initialCnt } = await loadFixture(snapshot);
            const n = 1000;
            await counter.add(n);
            expect(await counter.cnt()).to.equal(initialCnt + n);
        });
    });

    describe("Sub", function () {
        it("sub n", async function () {
            const { counter, owner, initialCnt } = await loadFixture(snapshot);
            const n = 1000;
            await counter.sub(n);
            expect(await counter.cnt()).to.equal(initialCnt - n);
        });
    });

});
