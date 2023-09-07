import { ethers } from "hardhat";

async function main() {
    // console.log(await ethers.getSigners());

    let [admin1, admin2, admin3, admin4, admin5, spender, address7] = await ethers.getSigners();
    const Owners = [admin1.address, admin2.address, admin3.address, admin4.address, admin5.address];
    // console.log(Owners);

    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    // const unlockTime = currentTimestampInSeconds + 60;

    // const lockedAmount = ethers.parseEther("0.001");

    const multisig = await ethers.deployContract("MultiSig", [Owners], {
        value: ethers.parseEther('10'),
    });

    await multisig.waitForDeployment();

    // console.log(
    //     `MultiSig with 10 ETH and unlock deployed to ${multisig.target}`
    // );

    const amount = ethers.parseEther("5");
    const receipt = await multisig.createTransaction(spender.address, amount);
    // console.log(receipt);
    // console.log(
    //     // @ts-ignore
    //     (await receipt.wait())?.logs[0]?.args
    // );

    // await multisig.approveTransaction(1);
    // await multisig.connect(address7).approveTransaction(1);

    console.log(ethers.formatEther(await ethers.provider.getBalance(spender.address)));

    await multisig.connect(admin3).approveTransaction(1);

    let balanceBefore = await ethers.provider.getBalance(spender.address);
    console.log(ethers.formatEther(balanceBefore));

    await multisig.connect(admin2).approveTransaction(1);
    // await multisig.connect(admin1).approveTransaction(1);
    console.log(`Spender balance: ${ethers.formatEther(await ethers.provider.getBalance(spender.address) - balanceBefore)})`);

    console.log(await multisig.getTransaction(1));

    let [txAddress, txAmount, txApprovals, isActive] = await multisig.getTransaction(1);
    console.log(txAddress, ethers.formatEther(txAmount), txApprovals, isActive);

    // multisig.on("Create", (event) => {})

    // Send ethers using ethers.js
    console.log(await multisig.getAddress());
    const txRequest = {
        to: await multisig.getAddress(),
        value: ethers.parseEther('5')
    }
    await spender.sendTransaction(txRequest);

    console.log(ethers.formatEther(await ethers.provider.getBalance(spender.address)));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
