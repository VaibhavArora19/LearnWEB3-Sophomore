// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Whitelist{

    // Max no of whitelisted addresses allowed
    uint8 public maxWhiteListedAddresses;

    // if an address is whitelisted we would set it to true otherwise it's false by default
    mapping(address => bool) public whitelistedAddresses;

    // total no of whitelisted addresses till now
    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistedAddresses){
        maxWhiteListedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(numAddressesWhitelisted < maxWhiteListedAddresses, "More addresses can not be adde, limit reached");

        require(!whitelistedAddresses[msg.sender], "Sender has already been whitelisted");

        whitelistedAddresses[msg.sender] = true;

        numAddressesWhitelisted++;
    }
}