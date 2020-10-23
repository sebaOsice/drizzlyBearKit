// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;
import "./iii6Log.sol";

contract GBook is iii6Log {
    struct Post {
        uint256 id;
        address authAdr;
        string authName;
        string headline;
        string content;
        uint256 numLikes;
    }
    Post[] private posts;

    uint256 private pc;
    string[] private headLines;
    mapping(address => uint256) private NumPostsByAddress;
    mapping(address => uint256) private NumLikesForAddress;

    constructor() public iii6Log() {}

    function writePost(string memory _headLine, string memory _content)
        public
        onlyClient()
        returns (bool)
    {
        uint256 _ID = pc;
        uint256 _UC = myID();
        headLines.push(_headLine);
        string memory _authName = clientNames[_UC];
        posts.push(Post(_ID, msg.sender, _authName, _headLine, _content, 0));

        NumPostsByAddress[msg.sender]++;
        NumLikesForAddress[msg.sender] = 0;
        pc++;
        return true;
    }

    function showAllPosts() public view returns (Post[] memory) {
        return posts;
    }

    function showClients() public view returns (string[] memory) {
        return clientNames;
    }

    function showHeadLines() public view returns (string[] memory) {
        return headLines;
    }
}
