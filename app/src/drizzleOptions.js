import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import NFToken from "./contracts/NFToken.json";
import GBook from "./contracts/GBook.json";
import Todo from "./contracts/Todo.json";
import hempireAssets from "./contracts/hempireAssets.json";
import iii6Log from "./contracts/iii6Log.json";
import III6 from "./contracts/III6.json";
import MilitaryChess from "./contracts/MilitaryChess.json";
const devProvider = "ws://localhost:7545";
const buildProvider = {
  host: "https://xdai.poanetwork.dev",
  chain_id: 100,
  symbol: "xDai",
  explorer: "https://blockscout.com/poa/xdai"
}
const web3 = new Web3(Web3.givenProvider || devProvider);


const options = {
  web3,
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, NFToken, GBook, Todo, III6, iii6Log, hempireAssets],
  events: {
    SimpleStorage: ["StorageSet"]
  }
};

export default options;
