// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract HypeToken is ERC20, Pausable, Ownable {
    constructor(uint256 initialSupply) ERC20("HypeToken","HYPE"){ _mint(msg.sender, initialSupply);}
    function pause() external onlyOwner{_pause();}
    function unpause() external onlyOwner{_unpause();}
    function _beforeTokenTransfer(address from,address to,uint256 amount) internal override {
        super._beforeTokenTransfer(from,to,amount);
        require(!paused(),"Paused");
    }
}