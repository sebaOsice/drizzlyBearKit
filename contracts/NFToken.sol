// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

// import "./iii6Log.sol";

contract NFToken is ERC721Full {
    string[] public types;
    uint256[] public tokenIDs;
    string[] public userTokens;
    mapping(string => bool) typeExists;
    mapping(uint256 => address) public ownerById;
    mapping(uint256 => string) public typeById;
    mapping(address => uint256[]) public tokenIDsByOwner;
    mapping(address => string[]) public tokensByOwner;

    constructor() public ERC721Full("HempGenomAsset", "HGA") {
        mintGovTokenStock(
            0x58F19f364D333828dd7C95A779ad4f804bCE49d7,
            "III6 Super Seed 2020 Regular"
        );
        mintGovTokenStock(
            0x58F19f364D333828dd7C95A779ad4f804bCE49d7,
            "III6 Sour Krout 2020 Regular"
        );
        mintGovTokenStock(
            0x58F19f364D333828dd7C95A779ad4f804bCE49d7,
            "III6 Gringo Piff 2020 Regular"
        );
        mintGovTokenStock(
            0x58F19f364D333828dd7C95A779ad4f804bCE49d7,
            "III6 Chamber Shaolin 2020 Regular"
        );
    }

    function mintGovTokenStock(address _to, string memory _type)
        public
        returns (bool)
    {
        require(!typeExists[_type]);
        uint256 _id = types.push(_type);
        tokenIDs.push(_id);
        _mint(_to, _id);
        typeExists[_type] = true;
        ownerById[_id] = _to;
        typeById[_id] = _type;
        tokenIDsByOwner[_to] = tokenIDs;
        tokensByOwner[_to] = types;

        return true;
    }

    function getTypes() public view returns (string[] memory) {
        return types;
    }

    function getIDs() public view returns (uint256[] memory) {
        return tokenIDs;
    }

    function getOwnerTypes() public returns (string[] memory) {
        return userTokens;
    }

    function ownerIDs(address _owner) public view returns (uint256[] memory) {
        return tokenIDsByOwner[_owner];
    }

    function ownerTokens(address _owner) public view returns (string[] memory) {
        return tokensByOwner[_owner];
    }
}
