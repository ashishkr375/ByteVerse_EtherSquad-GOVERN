import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useAddress } from "@thirdweb-dev/react";
import ActiveCampaignsT from "./ActiveCampaigns";
import InactiveCampaigns from "./InactiveCampaigns";

const contractAddress = "0xfb47e6A6651F1C9290885079F38E7A9ab6e2E144";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "campaignId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "CampaignCreated",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "campaigns",
    outputs: [
      { internalType: "uint256", name: "campaignId", type: "uint256" },
      { internalType: "string", name: "campaignTitle", type: "string" },
      { internalType: "string", name: "campaignDescription", type: "string" },
      { internalType: "string", name: "campaignImageCID", type: "string" },
      { internalType: "uint256", name: "targetAmount", type: "uint256" },
      { internalType: "uint256", name: "raisedAmount", type: "uint256" },
      { internalType: "uint256", name: "startAt", type: "uint256" },
      { internalType: "uint256", name: "endAt", type: "uint256" },
      { internalType: "bool", name: "status", type: "bool" },
      {
        internalType: "address payable",
        name: "campaignOwner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_campaignId", type: "uint256" }],
    name: "claimContribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_campaignID", type: "uint256" }],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "contributions",
    outputs: [
      { internalType: "uint256", name: "campaignId", type: "uint256" },
      { internalType: "uint256", name: "contributionId", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "date", type: "uint256" },
      { internalType: "address payable", name: "contributor", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_campaignTitle", type: "string" },
      { internalType: "string", name: "_campaignDescription", type: "string" },
      { internalType: "string", name: "_campaignImageCID", type: "string" },
      { internalType: "uint256", name: "_targetAmount", type: "uint256" },
      { internalType: "uint256", name: "_duration", type: "uint256" },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_campaignId", type: "uint256" }],
    name: "deleteCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_campaignId", type: "uint256" },
      { internalType: "string", name: "_campaignTitle", type: "string" },
      { internalType: "string", name: "_campaignDescription", type: "string" },
      { internalType: "string", name: "_campaignImageCID", type: "string" },
    ],
    name: "editCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveCampaigns",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "string", name: "campaignTitle", type: "string" },
          {
            internalType: "string",
            name: "campaignDescription",
            type: "string",
          },
          { internalType: "string", name: "campaignImageCID", type: "string" },
          { internalType: "uint256", name: "targetAmount", type: "uint256" },
          { internalType: "uint256", name: "raisedAmount", type: "uint256" },
          { internalType: "uint256", name: "startAt", type: "uint256" },
          { internalType: "uint256", name: "endAt", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
          {
            internalType: "address payable",
            name: "campaignOwner",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllContributions",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "uint256", name: "contributionId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "date", type: "uint256" },
          {
            internalType: "address payable",
            name: "contributor",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Contribution[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_campaignId", type: "uint256" }],
    name: "getAllContributionsForParticularCampaign",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "uint256", name: "contributionId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "date", type: "uint256" },
          {
            internalType: "address payable",
            name: "contributor",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Contribution[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCampaigns",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "string", name: "campaignTitle", type: "string" },
          {
            internalType: "string",
            name: "campaignDescription",
            type: "string",
          },
          { internalType: "string", name: "campaignImageCID", type: "string" },
          { internalType: "uint256", name: "targetAmount", type: "uint256" },
          { internalType: "uint256", name: "raisedAmount", type: "uint256" },
          { internalType: "uint256", name: "startAt", type: "uint256" },
          { internalType: "uint256", name: "endAt", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
          {
            internalType: "address payable",
            name: "campaignOwner",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInactiveCampaigns",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "string", name: "campaignTitle", type: "string" },
          {
            internalType: "string",
            name: "campaignDescription",
            type: "string",
          },
          { internalType: "string", name: "campaignImageCID", type: "string" },
          { internalType: "uint256", name: "targetAmount", type: "uint256" },
          { internalType: "uint256", name: "raisedAmount", type: "uint256" },
          { internalType: "uint256", name: "startAt", type: "uint256" },
          { internalType: "uint256", name: "endAt", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
          {
            internalType: "address payable",
            name: "campaignOwner",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_campaignId", type: "uint256" }],
    name: "getParticularCampaign",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "campaignId", type: "uint256" },
          { internalType: "string", name: "campaignTitle", type: "string" },
          {
            internalType: "string",
            name: "campaignDescription",
            type: "string",
          },
          { internalType: "string", name: "campaignImageCID", type: "string" },
          { internalType: "uint256", name: "targetAmount", type: "uint256" },
          { internalType: "uint256", name: "raisedAmount", type: "uint256" },
          { internalType: "uint256", name: "startAt", type: "uint256" },
          { internalType: "uint256", name: "endAt", type: "uint256" },
          { internalType: "bool", name: "status", type: "bool" },
          {
            internalType: "address payable",
            name: "campaignOwner",
            type: "address",
          },
        ],
        internalType: "struct CrowdFunding.Campaign",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCampaigns",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalContributions",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
export default function HomeScreenT() {
  const address = useAddress();
  const desiredChainId = "0x13882"; 
  const connectToPolygonAmoyTestnet = async () => {
    if (address) {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });

       
        if (chainId !== desiredChainId) {
        
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: desiredChainId }],
            });
          } catch (error) {
            // Handle error
            console.log("Error while switching to zkEVM testnet:", error);
          }
        }
      } else {
        // Handle case where window.ethereum is not available
        console.log("Metamask not available");
      }
    }
  };
  useEffect(() => {
    connectToPolygonAmoyTestnet();
  }, [address]);

  return (
    <div>
      <Navbar />
      <Banner />
      <ActiveCampaignsT contractAddress={contractAddress} abi={abi} />
      <InactiveCampaigns contractAddress={contractAddress} abi={abi} />
      
    </div>
  );
}
