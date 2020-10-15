// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract NFToken is ERC721Full {
    constructor() public ERC721Full("CollectibleToken", "cllc") {}

    function mintToken(address _to, string memory _URI) public returns (bool) {
        uint256 _tokenID = 0;
        _mint(_to, _tokenID);
        return true;
    }
}
