// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AntGem is ERC721, Ownable {
    uint private _nextTokenId;

    event Log(string);
    event Log(uint);

    constructor() ERC721("AntGem", "AG") Ownable(msg.sender) {}

    function safeMint(
        address _to,
        string calldata _requestId,
        string calldata _signature
    ) public onlyOwner returns (uint) {
        emit Log(_requestId);
        emit Log(_signature);

        ++_nextTokenId;

        _safeMint(_to, _nextTokenId);
        return _nextTokenId;
    }
}
