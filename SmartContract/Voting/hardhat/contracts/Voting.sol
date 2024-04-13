// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


contract voting {
    // create a structure template for each of the candidates
    struct Candidate {
        uint256 id;
        string name;
        uint256 numberOfVotes;
    }
    //list of all the candidates
    Candidate[] public candidates;
    //this will be the owner's address
    address public owner;
    //map all the voter's address
    mapping(address => bool) public voters;
    //list of all voters
    address[] public listOfVoters;
    //create a voting start and end session
    uint256 public votingStart;
    uint256 public votingEnd;

    //create an election status
    bool public electionstarted;

    //restrict creation of the election to the owner
    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "You are not authorized to start the election"
        );
        _;
    }

    //check if the election is ongoing
    modifier electionOngoing() {
        require(electionstarted, "No election yet");
        _;
    }

    //create a constructor
    constructor() {
        owner = msg.sender;
    }

    //to start an election
    function startElection(
        string[] memory _candidates,
        uint256 _votingDuration
    ) public onlyOwner {
        require(electionstarted == false, "Election is currently ongoing");
        delete candidates;
        resetAllVoterStatus();
        for (uint256 i = 0; i < _candidates.length; i++) {
            candidates.push(
                Candidate({id: i, name: _candidates[i], numberOfVotes: 0})
            );
        }

        electionstarted = true;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_votingDuration * 1 minutes);
    }

    //to add a new candidate
    function addCandidate(
        string memory _name
    ) public onlyOwner electionOngoing {
        require(checkElectionPeriod(), "Election period has ended");
        candidates.push(
            Candidate({id: candidates.length, name: _name, numberOfVotes: 0})
        );
    }

    //check voter status
    function voterStatus(
        address _voter
    ) public view electionOngoing returns (bool) {
        if (voters[_voter] == true) {
            return true;
        }
        return false;
    }

    //to vote function
    function voteTo(uint256 _id) public electionOngoing {
        require(checkElectionPeriod(), "Election period has ended");
        require(voterStatus(msg.sender), "You can only vote once");
        candidates[_id].numberOfVotes++;
        voters[msg.sender] = true;
        listOfVoters.push(msg.sender);
    }

    //get the number of votes
    function retrieveVotes() public view returns (Candidate[] memory) {
        return candidates;
    }

    //monitor the election period
    function electionTimer() public view electionOngoing returns (uint256) {
        if (block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }

    //check if election is still ongoing
    function checkElectionPeriod() public returns (bool) {
        if (electionTimer() > 0) {
            return true;
        }
        electionstarted = false;
        return false;
    }

    //reset all voter status
    function resetAllVoterStatus() public onlyOwner {
        for (uint256 i = 0; i < listOfVoters.length; i++) {
            voters[listOfVoters[i]] = false;
        }
        delete listOfVoters;
    }
}
