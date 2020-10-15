const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const NFToken = artifacts.require("NFToken");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(NFToken);
  deployer.deploy(ComplexStorage);
};
