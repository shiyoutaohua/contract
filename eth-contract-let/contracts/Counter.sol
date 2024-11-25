// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
    uint public cnt;

    // Add(string,uint256,uint256) -keccak256-> f8aa7cd5d797416490f5f0f5b9cf0471b1da9e3929f67141168fd00a2286f963(topic0)
    // add -keccak256-> 0x4f5a8bb8492337e79bdc674d6f31ac448f8017e26cc7bfe3144fb5d886fe5369(topic1)
    event Add(string indexed key, uint oldCnt, uint newCnt);
    event Sub(string indexed key, uint oldCnt, uint newCnt);

    constructor(uint _cnt) {
        cnt = _cnt;
    }

    function show() external view returns (uint) {
        return cnt;
    }

    function add(uint _n) external {
        uint oldCnt = cnt;
        uint newCnt = cnt + _n;
        cnt = newCnt;
        emit Add("add", oldCnt, newCnt);
    }

    function sub(uint _n) external {
        uint oldCnt = cnt;
        uint newCnt = cnt - _n;
        cnt = newCnt;
        emit Sub("sub", oldCnt, newCnt);
    }
}
