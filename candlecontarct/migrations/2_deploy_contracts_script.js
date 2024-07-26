const CandleAuction = artifacts.require("CandleAuction");

module.exports = function(deployer) {
  const biddingTime = 60; // e.g., 60 seconds
  const beneficiary = '0x1DCc460BAD998744ba7653bb88e67369dC601545';//Replace this with avalable accounts in ganache output

  deployer.deploy(CandleAuctsion, biddingTime, beneficiary);
};




