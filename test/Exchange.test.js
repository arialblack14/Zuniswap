require("@nomiclabs/hardhat-waffle");
const { expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (value) => ethers.utils.parseEther(value.toString());
const getBalance = ethers.provider.getBalance;

describe("Exchange", () => {
    let token;
    let exchange;
    let owner;
    let user;

    beforeEach(async () => {
        [owner, user] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");
        token = await Token.deploy("Token", "TKN", toWei(1e6)); 
        await token.deployed();

        const Exchange = await ethers.getContractFactory("Exchange");
        exchange = await Exchange.deploy(token.address);
        await exchange.deployed();
    })

    it("is deployed", async () => {
        expect(await exchange.deployed.to.equal(exchange));
    })

    describe("addLiquidity", async () => {
        it("adds liquidity", async () => {
            await token.approve(exchange.address, toWei(200));
            await exhange.addLiquidity(toWei(200), { value: toWei(100) });
    
            expect(await getBalance(exchange.address)).to.equal(toWei(100));
            expect(await exchange.getReserve()).to.equal(toWei(200));
        })
    })
})
