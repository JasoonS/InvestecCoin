var InvestecCoin = artifacts.require("./InvestecCoin.sol")


module.exports = function(deployer) {
  deployer.deploy(InvestecCoin)
};
