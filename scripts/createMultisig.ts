import { ethers } from "hardhat";

async function main() {
    // let [admin1, admin2, admin3, admin4, admin5, spender, address7] = await ethers.getSigners();
    // const Owners = [admin1.address, admin2.address, admin3.address, admin4.address, admin5.address];

    let [admin1Address, admin2Address, spenderAddress] = ["0xaaec95f93550c8dB4521ad16Eee49A9b34632fA7", "0x8c5973E3869E1511bCd2b5B50C9D0b9a9Ec72143", "0x031852ef511C9c7Fd062800151684495c3C6612d"];
    // let [admin1Address, admin2Address, spenderAddress] = ["0x298aaa9a0822eb8117f9ea24d28c897e83415440", "0x20da05400E7Dd3b76793469658CF34f6F3e7B31E", "0x2Af6B6fB6a6a6eb93Dc32151A5B7F403Be14fD88"];
    const Owners = [admin1Address, admin2Address, spenderAddress];
    // console.log(await ethers.getSigners());

    // const multisigFactory = await ethers.deployContract("MultisigFactory", []);

    // await multisigFactory.waitForDeployment();

    // console.log(
    //     `MultiSig deployed to ${multisigFactory.target}`
    // );

    // const receipt = await multisigFactory.createMultisig(Owners);
    // console.log(receipt);
    // console.log(
    //     // @ts-ignore
    //     (await receipt.wait())?.logs[0]?.args
    // );

    // @ts-ignore
    // const newMultisig = (await receipt.wait())?.logs[0]?.args[0];

    // const newMultisig = "0x7d0B0A1fD3f9Bff0c1175234f33478131aE86113";
    // const newMultisig = "0xf39625b106857007103756b5d178c499a872F6c6";
    // const newMultisig = "0x3c68027368aC1938926f1716AfFAC8A95dDa6267";
    // let multisigFactory = await ethers.getContractAt('IMultisigFactory', newMultisig);
    // await multisigFactory.createMultisig(Owners);

    // Send transaction to the newly deployed contract

    // console.log(await multisigFactory.getAddress());
    // @ts-ignore
    // const factoryMultisigAddress = (await receipt.wait())?.logs[0]?.args[0];
    // console.log(factoryMultisigAddress);

    // 0x7ACD7D3558946c247f4485008b985540b0a054fc


    let multisigContract = await ethers.getContractAt('IMultisig', "0x5832A489EA41Ea03882b1bCD00bdC35958F4e5C8");
    // let multisigContract = await ethers.getContractAt('IMultisig', (await multisigFactory.getAddress()));
    // console.log(multisigContract);
    const amount = ethers.parseEther("0.0000004");
    // await multisigContract.createTransaction(admin1Address, amount);
    await multisigContract.AprroveTransaction(1);
    // await multisigContract.getTransaction(1;



    // await multisig.approveTransaction(1);
    // await multisig.connect(address7).approveTransaction(1);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
