import { expect } from 'chai';
import { deployContract, getWallet, LOCAL_RICH_WALLETS } from "../deploy/utils";
import { ethers } from 'hardhat';

describe('Greeter', function () {
    it("should aggregate calls successfully", async function () {
        const blockNumber = await ethers.provider.getBlockNumber();
        const block = await ethers.provider.getBlock(blockNumber);

        const wallet = getWallet();

        const contract = await deployContract("MockCallee", [], { wallet, silent: true });

        // HERE: does not work on local node, works properly with deployed testnet
        expect(await contract.getBlockHash(blockNumber)).to.equal(block?.hash);
    });
});
