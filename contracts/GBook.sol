// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract GBook {
    string[] public userNames;
    string public userName;
    string[] public headLines;
    string public lastHeadLine;
    mapping(address => bool) internal isUser;
    mapping(string => address) public AddressByName;
    mapping(address => string) public NameByAddress;
    mapping(address => uint256) public IDByAddress;
    mapping(uint256 => address) public AddressByID;
    mapping(uint256 => string) public NameByID;
    mapping(string => uint256) public IDByName;

    struct User {
        uint256 id;
        address adrs;
        string userName;
    }
    User[] public users;
    mapping(address => User) public UserByAddress;

    struct Post {
        uint256 id;
        address authAdr;
        string content;
        string headline;
        uint256 numLikes;
        address[] likeAdrs;
    }
    Post[] public posts;

    function setUserName(string memory _userName) public returns (bool) {
        require(!isUser[msg.sender]);
        uint256 _ID = userNames.push(_userName);
        NameByAddress[msg.sender] = _userName;
        AddressByName[_userName] = msg.sender;
        AddressByID[_ID] = msg.sender;
        NameByID[_ID] = _userName;
        IDByAddress[msg.sender] = _ID;
        IDByName[_userName] = _ID;
        users.push(User(_ID, msg.sender, _userName));
        isUser[msg.sender] = true;
        userName = _userName;
        UserByAddress[msg.sender] = users[_ID - 1];

        return true;
    }

    function editUserName(string memory _userName)
        public
        payable
        returns (bool)
    {
        require(isUser[msg.sender]);

        uint256 _ID = IDByAddress[msg.sender];
        userNames[_ID - 1] = _userName;
        NameByAddress[msg.sender] = _userName;
        AddressByName[userName] = 0x0000000000000000000000000000000000000000;
        AddressByName[_userName] = msg.sender;
        NameByID[_ID] = _userName;
        IDByName[userName] = 0;
        IDByName[_userName] = _ID;
        users[_ID - 1] = User(_ID, msg.sender, _userName);
        UserByAddress[msg.sender] = users[_ID - 1];

        return true;
    }

    function showUsers() public view returns (User[] memory) {
        return users;
    }

    function showUserNames() public view returns (string[] memory) {
        return userNames;
    }

    function showUserNamme() public view returns (string memory) {
        uint256 _ID = IDByAddress[msg.sender];
        return userNames[_ID];
    }

    function showUser() public view returns (User memory) {
        return UserByAddress[msg.sender];
    }

    function writePost(string memory _content, string memory _headLine)
        public
        returns (bool)
    {
        require(isUser[msg.sender]);
        uint256 _ID = headLines.push(_headLine);
        lastHeadLine = _headLine;
        address[] memory empty;
        posts.push(Post(_ID, msg.sender, _content, _headLine, 0, empty));
        return true;
    }

    function showPosts() public view returns (Post[] memory) {
        return posts;
    }
}
