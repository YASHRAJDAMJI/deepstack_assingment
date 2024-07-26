const CandleAuction = artifacts.require("CandleAuction");

contract("CandleAuction", accounts => {
  it("bids placed correctly", async () => {
    const auction = await CandleAuction.deployed();

    await auction.bid({ from: accounts[1], value: web3.utils.toWei("1", "ether") });
    const highestBid = await auction.highestBid();
    assert.equal(highestBid.toString(), web3.utils.toWei("1", "ether"), "Highest bid should be 1 ether");

    await auction.bid({ from: accounts[2], value: web3.utils.toWei("2", "ether") });
    const newHighestBid = await auction.highestBid();
    assert.equal(newHighestBid.toString(), web3.utils.toWei("2", "ether"), "Highest bid should be 2 ether");
  });


});
