
const main = async() => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT') // Compiles contract and gnerates required files in artifacts
    const nftContract = await nftContractFactory.deploy() //Create a local ethereum network and end it once we have run the contract.
    await nftContract.deployed() // Wait until contract is officially mined
    console.log("Contract deployed to:", nftContract.address)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()