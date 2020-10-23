const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const NFToken = artifacts.require("NFToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const GBook = artifacts.require("GBook");
const Todo = artifacts.require("Todo");
const iii6Log = artifacts.require("iii6Log");
const III6 = artifacts.require("III6");
const hempireAssets = artifacts.require("hempireAssets");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(NFToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(GBook);
  deployer.deploy(Todo);
  deployer.deploy(iii6Log); // abstract contract internal
  deployer.deploy(III6);
  deployer.deploy(hempireAssets); // abstract contract internal
};
