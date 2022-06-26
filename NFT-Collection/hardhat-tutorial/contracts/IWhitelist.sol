// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IWhitelist{
    function whitelistedAddresses(address) external view returns(bool);
}