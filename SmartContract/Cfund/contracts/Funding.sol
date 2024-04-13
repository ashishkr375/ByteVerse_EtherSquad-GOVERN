// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Funding {
    struct Contribution {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Contribution) public contributions;

    uint256 public numberOfContributions = 0;

    function createContribution(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Contribution storage contribution = contributions[numberOfContributions];

        require(contribution.deadline < block.timestamp, "The deadline should be a date in the future.");

        contribution.owner = _owner;
        contribution.title = _title;
        contribution.description = _description;
        contribution.target = _target;
        contribution.deadline = _deadline;
        contribution.amountCollected = 0;
        contribution.image = _image;

        numberOfContributions++;

        return numberOfContributions - 1;
    }

    function donateToContribution(uint256 _id) public payable {
        uint256 amount = msg.value;

        Contribution storage contribution = contributions[_id];

        contribution.donators.push(msg.sender);
        contribution.donations.push(amount);

        (bool sent,) = payable(contribution.owner).call{value: amount}("");

        if(sent) {
            contribution.amountCollected = contribution.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (contributions[_id].donators, contributions[_id].donations);
    }

    function getContributions() public view returns (Contribution[] memory) {
        Contribution[] memory allContributions = new Contribution[](numberOfContributions);

        for(uint i = 0; i < numberOfContributions; i++) {
            Contribution storage item = contributions[i];

            allContributions[i] = item;
        }

        return allContributions;
    }
}
