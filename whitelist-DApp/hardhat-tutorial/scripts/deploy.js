const {ethers} = require('hardhat');

const main = async () => {

    const whitelistContract = await ethers.getContractFactory('Whitelist');

    // 10 is the max no of whitelist addresses allowed
    const  deployedWhitelisContract = await whitelistContract.deploy(10);


    // waiting for the contract to be deployed
    await deployedWhitelisContract.deployed();

    console.log(`Whitelist contract address: ${deployedWhitelisContract.address}`);

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error); 
    process.exit(1);
})
// 0x91A8c437071cDba563217853B80CBbebde03d3b2