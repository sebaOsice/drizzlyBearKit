pragma solidity >=0.4.22 <0.7.0;

// pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract hempireAssets {
    // ERC721 prooves ownership of HGA

    string name;
    string symbol;
    address assetOwner;
    mapping(string => string) symbolByName;
    mapping(string => string) nameBySymbol;

    constructor() public {
        name = "HempGenomAssets";
        symbol = "HGA";
        symbolByName[name] = symbol;
        nameBySymbol[symbol] = name;
        assetOwner = msg.sender;
    }

    function showAsset(string calldata _symbol)
        external
        view
        returns (string memory, string memory)
    {
        return (_symbol, nameBySymbol[_symbol]);
    }
}

contract hempireLicences {
    // License Contract between HGAOwner and Breeder / Grower
    struct License {
        uint256 id;
        uint256 HGAID;
        address HGAOwner;
        address LicenseApplicant;
        uint256 seasons; // 0 is timewise unlimited
        bool excl; // exclusive license
        bool breed; // true is breeding project
        uint256 seedsAppr; // 0 is unlimited supply of this seedstock
        uint256 seedPrice; // 100 = 1BudCoin = 1Oz. Gold / 1500
        uint256 seedRoy; // 10000 = 100% // 100 = 1% // 1 = 0,01%
        uint256 budRoy; // 10000 = 100% // 100 = 1% // 1 = 0,01%
        uint256 patRoy; // 10000 = 100% // 100 = 1% // 1 = 0,01%
        uint256 seasonFee; // 100 = 1BudCoin = 1Oz. Gold / 1500
    }
    License[] private lics;
}

contract hempireSeeds {
    // ERC721 multiNFT rare by amount value parent NFT by dydx formula
}

contract hempireBudCoins {
    // ERC20 stable coin variable marketcap fixed (snxau / 1000) value
}
