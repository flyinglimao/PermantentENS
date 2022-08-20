const { ethers } = require('hardhat');

async function main() {
  const factory = await ethers.getContractFactory('PermantentENS');
  const contract = await factory.deploy();
  console.log(`Deployed at ${contract.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
