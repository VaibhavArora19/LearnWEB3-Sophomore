require("dotenv").config();
const {ethers} = require("hardhat");
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require('../constants/index');

const main = async () => {

    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;


    const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);


    console.log("Crypto Devs contract address: ", deployedCryptoDevsContract.address);

};

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})
// 0xf8E6b905F9b8936Ada626a85393b532d9dB673c2