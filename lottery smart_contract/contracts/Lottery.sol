// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Lottery {
    address public manager;
    //     address[] public players;  //the old one from the course
    address payable[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(
            msg.value > .01 ether,
            "The amount should be greater than .01 ether"
        );
        // players.push(msg.sender); //The old one which is depriciated
        players.push(payable(msg.sender));
    }

    function random() private view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(block.prevrandao, block.timestamp, players)
                )
            );
    }

    function pickWinner() public restricted {
        require(players.length > 0, "No players in the lottery");

        uint index = random() % players.length;
        address payable winner = players[index];

        (bool success, ) = winner.call{value: address(this).balance}("");
        require(success, "Transfer failed");

        // Fix: Create a new array with zero elements
        players = new address payable[](0);
    }

    modifier restricted() {
        require(msg.sender == manager, "Not the manager");
        _;
    }

    // function to get all players
    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }
}
