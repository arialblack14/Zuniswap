pragma solidity ^0.8.0;

contract Exchange {
    address public tokenAddress;

    constructor(address _token) {
        require(_token != address(0), "Invalid token address");

        tokenAddress = _token;
    }
}