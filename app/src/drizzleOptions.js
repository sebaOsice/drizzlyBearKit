import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import NFToken from "./contracts/NFToken.json";
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
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, NFToken],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

export default options;
