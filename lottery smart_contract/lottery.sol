// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Lottery{
    address public  manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable  {
        // require(msg.sender != address(0), "Entrance is invalid");
        players.push(msg.sender);
    }
}