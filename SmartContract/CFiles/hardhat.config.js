require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.8.0",
  networks: {
    amoy: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  
  }
};
