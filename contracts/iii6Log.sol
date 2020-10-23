pragma solidity >=0.4.22 <0.7.0;

// pragma experimental ABIEncoderV2;

contract iii6Log {
    address[] private admins;
    uint256 private ac;
    string[] public clientNames;
    uint256 private uc;
    mapping(address => bool) private isAdmin;
    mapping(address => bool) private isClient;

    struct Client {
        uint256 id;
        address adr;
        string name;
        bool admin;
    }

    Client[] private clients;
    mapping(address => uint256) private id4adr;
    mapping(address => string) private nik4adr;
    mapping(address => Client) private client4adr;

    modifier newUser() {
        require(!isClient[msg.sender]);
        _;
    }
    modifier onlyAdmin() {
        require(isAdmin[msg.sender]);
        _;
    }
    modifier onlyClient() {
        require(isClient[msg.sender]);
        _;
    }

    constructor() public {
        uc = 0;
        admins.push(msg.sender);
        clientNames.push("admin");
        isAdmin[msg.sender] = true;
        isClient[msg.sender] = true;

        clients.push(Client(uc, msg.sender, "admin", true));
        id4adr[msg.sender] = uc;
        nik4adr[msg.sender] = "admin";
        uc++;
        ac++;
    }

    function setName(string calldata _name) external returns (bool) {
        uint256 _id = uc;
        clientNames.push(_name);
        isClient[msg.sender] = true;
        isAdmin[msg.sender] = false;

        clients.push(Client(_id, msg.sender, _name, false));
        id4adr[msg.sender] = _id;
        nik4adr[msg.sender] = _name;
        uc++;
        return true;
    }

    function editName(string calldata _name)
        external
        onlyClient()
        returns (bool)
    {
        uint256 _id = id4adr[msg.sender];
        clientNames[_id] = (_name);
        isClient[msg.sender] = true;
        isAdmin[msg.sender] = false;

        clients[_id] = (Client(_id, msg.sender, _name, false));
        id4adr[msg.sender] = _id;
        nik4adr[msg.sender] = _name;
        return true;
    }

    function adminEdit(
        address _do,
        string calldata _name,
        bool _admin
    ) external onlyAdmin() returns (bool) {
        uint256 _id = id4adr[_do];
        clientNames[_id] = (_name);
        isClient[_do] = true;
        isAdmin[_do] = _admin;
        admins.push(_do);
        clients[_id] = (Client(_id, _do, _name, _admin));
        id4adr[_do] = _id;
        nik4adr[_do] = _name;
        if (_admin) ac++;
        return true;
    }

    function deleteMe() external onlyClient() returns (bool) {
        require(!isAdmin[msg.sender] || ac >= 2);
        uint256 _id = id4adr[msg.sender];
        clientNames[_id - 1] = "";
        isClient[msg.sender] = false;
        isAdmin[msg.sender] = false;

        clients[_id - 1] = (Client(_id, msg.sender, "", false));
        id4adr[msg.sender] = _id;
        nik4adr[msg.sender] = "";
        return true;
    }

    function adminDelete(address _do) external onlyAdmin() returns (bool) {
        require(!isAdmin[_do] || ac >= 2);
        uint256 _id = id4adr[_do];
        clientNames[_id - 1] = "";
        isClient[_do] = false;
        isAdmin[_do] = false;

        clients[_id - 1] = (Client(_id, _do, "", false));
        id4adr[_do] = _id;
        nik4adr[_do] = "";
        return true;
    }

    function idByAdr(address _do) external view returns (uint256) {
        return id4adr[_do];
    }

    function nikNow() external view returns (string memory) {
        return nik4adr[msg.sender];
    }

    function getUC() external view returns (uint256) {
        return uc;
    }

    function myID() internal view returns (uint256) {
        return id4adr[msg.sender];
    }

    function nikByAdr(address _do) external view returns (string memory) {
        return nik4adr[_do];
    }

    function clientByAdr(address _do)
        external
        view
        returns (
            string memory,
            uint256,
            address,
            bool
        )
    {
        return (nik4adr[_do], id4adr[_do], msg.sender, isAdmin[msg.sender]);
    }
}
