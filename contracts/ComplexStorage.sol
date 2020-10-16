// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ComplexStorage {
    address public owner;
    address public cntrct;

    string[] private strings;

    mapping(address => DeviceData) structs1;

    DeviceData public rumbleBB;

    struct DeviceData {
        string anonym;
        string decentral;
        string autonom;
    }

    constructor() public {
        owner = msg.sender;
        cntrct = address(this);
        addString("au");
        addString("to");
        addString("no");
        addString("mo");
        addString("us");
        rumbleBB = DeviceData("anonymous", "decentralized", "autonomous");
    }

    function addString(string memory str) public {
        strings.push(str);
    }

    function getStrings() public view returns (string[] memory) {
        return strings;
    }
}
