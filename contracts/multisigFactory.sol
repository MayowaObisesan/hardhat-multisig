// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;
import {MultiSig} from "./multisig.sol";

contract MultisigFactory {
    MultiSig[] public _multisig;
    event Create(address _addr);

    function createMultisig(
        address[] memory _admins
    ) external payable returns (MultiSig newMultisig) {
        newMultisig = new MultiSig(_admins);
        _multisig.push(newMultisig);
        emit Create(address(newMultisig));
    }

    function getAllMultisig() external view returns (MultiSig[] memory) {
        return _multisig;
    }
}
