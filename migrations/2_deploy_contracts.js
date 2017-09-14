var PoSToken = artifacts.require("./PoSToken.sol");

module.exports = function(deployer) {
    deployer.deploy(PoSToken);
};