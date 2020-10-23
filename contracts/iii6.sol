pragma solidity >=0.4.22 <0.7.0;

import "./iii6Log.sol";
import "./hempire.sol";
import "./GBook.sol";
import "./Todo.sol";
import "./NFToken.sol";

contract III6 is iii6Log, hempireAssets, Todo {
    constructor() public iii6Log() hempireAssets() Todo() {}
}
