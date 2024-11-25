// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AppleCoin is ERC20, Ownable {
    constructor(
        uint _initialSupply
    ) ERC20("AppleCoin", "AC") Ownable(msg.sender) {
        _mint(msg.sender, _initialSupply);
    }

    function mint(address _to, uint _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
