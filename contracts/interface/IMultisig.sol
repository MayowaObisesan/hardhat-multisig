// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;
import {Transaction} from "../multisig.sol";

// import {MultiSig} from "../multisigFactory.sol";
// import "./IMultiSig.sol";

interface IMultisig {
    function createTransaction(address _spender, uint _amount) external;

    function AprroveTransaction(uint _id) external;

    function calculateMinumumCount() external view returns (uint);

    function getTransaction(uint id) external view returns (Transaction memory);
}
