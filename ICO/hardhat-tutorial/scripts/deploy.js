const {ethers} = require("hardhat");
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants/index");

const main = async () => {

    const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

    const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

    const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);

    console.log("Crypto Devs Token Contract Address: ", deployedCryptoDevsTokenContract.address);
    
};

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
})
// 0xA2345fA4118c75398599F455dfbF3C91CB8A8C25