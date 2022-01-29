const hre = require("hardhat");

const main = async () => {
	const [deployer] = await hre.ethers.getSigners();
	const accountBalance = await deployer.getBalance();

	console.log(`Deploying contracts with account: ${deployer.address}`);
	console.log(`Account balance: ${accountBalance.toString()}`);

	const contract = await hre.ethers.getContractFactory("WavePortal");
	const portal = await contract.deploy({
		value: hre.ethers.utils.parseEther("5"),
	});
	await portal.deployed();

	console.log(`WavePortal address ${portal.address}`);
}

(async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
})();