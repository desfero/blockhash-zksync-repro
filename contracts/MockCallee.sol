// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MockCallee {
    function getBlockHash(uint256 blockNumber) public view returns (bytes32 blockHash) {
        blockHash = blockhash(blockNumber);
    }
}
