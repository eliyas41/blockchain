// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Lottery{
    address public  manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable  {
        require(msg.value < .01 ether, "The amount should be greater than .01 ether");
        players.push(msg.sender);
    }
}