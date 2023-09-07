// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

import "./IMultisig.sol";

interface IMultisigFactory {
    function createMultisig(
        address[] memory _admins
    ) external payable returns (IMultisig newMultisig);
}
