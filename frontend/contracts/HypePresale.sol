// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract HypePresale is Ownable, ReentrancyGuard {
    IERC20 public immutable hypeToken; uint256 public immutable saleEnd;
    struct TierInfo{uint256 price;uint256 allocation;uint256 sold;uint256 unlockTime;}
    mapping(uint8=>TierInfo) public tiers;
    mapping(address=>mapping(uint8=>uint256)) public purchased;
    event Purchased(address,uint8,uint256); event Claimed(address,uint256);
    constructor(address _token,uint256 _saleEnd){
        hypeToken=IERC20(_token);saleEnd=_saleEnd;
        tiers[1]=TierInfo(0.08 ether,200000*1e18,0,_saleEnd);
        tiers[2]=TierInfo(0.10 ether,300000*1e18,0,_saleEnd+30 days);
        tiers[3]=TierInfo(0.12 ether,500000*1e18,0,_saleEnd+60 days);
    }
    function buyTier(uint8 t,uint256 a) external payable nonReentrant{
        TierInfo storage i=tiers[t];
        require(block.timestamp<saleEnd,"Ended");require(a>0,"Zero");require(i.sold+a<=i.allocation,"Exceed");
        require(msg.value==a*i.price,"Value");
        i.sold+=a;purchased[msg.sender][t]+=a;emit Purchased(msg.sender,t,a);
    }
    function claim() external nonReentrant{
        uint256 total; for(uint8 t=1;t<=3;t++){TierInfo storage i=tiers[t];
            uint256 o=purchased[msg.sender][t];
            if(o>0&&block.timestamp>=i.unlockTime){total+=o;purchased[msg.sender][t]=0;}}
        require(total>0,"None"); require(hypeToken.transfer(msg.sender,total),"Fail");
        emit Claimed(msg.sender,total);
    }
    function withdraw() external onlyOwner{payable(owner()).transfer(address(this).balance);}
}