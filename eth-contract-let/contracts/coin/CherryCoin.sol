// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CherryCoin is ERC20, Ownable {
    constructor(
        uint _initialSupply,
        address _initialOwner
    ) ERC20("CherryCoin", "CC") Ownable(_initialOwner) {
        _mint(_initialOwner, _initialSupply);
    }

    function mint(address _to, uint _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
