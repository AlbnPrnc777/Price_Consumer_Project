const hre = require("hardhat");

async function main() {
    const PriceConsumerV3 = await hre.ethers.getContractFactory("PriceConsumerV3");

    const priceConsumer = await PriceConsumerV3.deploy();

    await priceConsumer.waitForDeployment();

    const contractAddress = await priceConsumer.getAddress();

    console.log("PriceConsumerV3 deployed to:", contractAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
