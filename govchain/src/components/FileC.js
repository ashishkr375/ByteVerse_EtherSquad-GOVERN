import Files from "./artifacts_File/Files.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./FileUpload";
import Display from "./Display";
import Modal from "./Modal";
import "./File.css";
import NavbarC from "./NavbarC";

function FileC() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x56d2439aDE15fF6B9379b79Be6577545f7FAF7EB";

        const contract = new ethers.Contract(
          contractAddress,
          Files.abi,
          signer
        );
       
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>   
    <NavbarC/> 
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "black" }}>Gov File Transfer</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "black" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default FileC;
