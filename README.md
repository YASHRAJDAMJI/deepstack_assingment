# Candle Auction Smart Contract

## Greetings

Sincere gratitude to the DeepStack team for providing this opportunity to work on the Candle Auction smart contract project.

## Technologies Used

This project is developed using the following technologies:

- **Solidity**: Smart contract programming language.
- **Truffle**: Development framework for Ethereum.
- **Ganache**: Personal blockchain for Ethereum development.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.

## How to Run the Project

- **Run the Ganache**: Run the `ganache` command. This will start a network for deploying the SmartContract. (Update the 'beneficiary' in `2_deploy_contracts.js` with the 'Available Accounts' displayed in the Ganache command.)
- **Compile Contracts**: Compile by using the command `truffle compile`.
- **Deploy Contracts**: Deploy using the command `truffle migrate --reset`.
- **Test Contracts**: Test the contract using the command `truffle test`.

## About Implementation and Functions(WalkThrough of Contract)

- **constructor(uint _biddingTime, address payable _beneficiary)**:
  - **Purpose**: Initializes the auction with a specified bidding time and beneficiary address.
  - **Parameters**:
    - `_biddingTime`: The length of time (in seconds) that the auction will run.
    - `_beneficiary`: The address that will receive the funds from the highest bid once the auction ends.
  - **Details**: This function sets up the auction by storing the end time and beneficiary address. It also initializes the highest bid to zero.

- **bid() public payable**:
  - **Purpose**: Allows participants to place a bid.
  - **Details**: This function can be called by any participant to place a bid. The bid amount must be higher than the current highest bid. If the bid is successful, the highest bid and highest bidder are updated. If the new bid is higher than the previous bid, the previous highest bidder can withdraw their bid.

- **withdraw() public returns (bool)**:
  - **Purpose**: Allows participants to withdraw their bids if they are outbid.
  - **Details**: If a participant is outbid, they can call this function to withdraw their bid. The function checks if the participant has any pending returns and transfers the amount back to the participant.

- **auctionEnd() public**:
  - **Purpose**: Ends the auction and transfers the highest bid to the beneficiary.
  - **Details**: This function can only be called after the bidding time has elapsed. It checks if the auction has already ended and if not, transfers the highest bid to the beneficiary and marks the auction as ended.

- **highestBid() public view returns (uint)**:
  - **Purpose**: Returns the highest bid amount.
  - **Details**: This function provides a read-only view of the highest bid amount placed in the auction.

- **highestBidder() public view returns (address)**:
  - **Purpose**: Returns the address of the highest bidder.
  - **Details**: This function provides a read-only view of the address that placed the highest bid.
