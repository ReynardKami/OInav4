const hre = require("hardhat");

async function main() {
  const Ō_Inari = await hre.ethers.getContractFactory("Ō-Inari");
  const ō_inari = await Ō_Inari.deploy();

  await ō_inari.deployed();

  console.log("Ō-Inari deployed to:", ō_inari.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
