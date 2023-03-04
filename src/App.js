import React from 'react';
import { useState } from 'react';
import  './style.css';


function EthereumWallet() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [periodOfTime, setPeriodOfTime] = useState('');
  const [interval, setInterval] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className="container">
      <h2>To use the Ethereum wallet application, follow these steps:</h2>
      <ol>
        <li>Visit the website or download the application to your device.</li>
        <li>Connect your Ethereum wallet to the application by clicking on the "Connect Wallet" button.</li>
        <li>Select your preferred wallet provider from the options available.</li>
        <li>Follow the prompts to authorize the connection between your wallet and the application.</li>
        <li>Once your wallet is connected, you can access your Ethereum balance and manage your transactions directly from the application.</li>
      </ol>
      <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label htmlFor="tokenAddress">Token Address:</label><br/>
        <input type="text" id="tokenAddress" value={tokenAddress} onChange={(event) => setTokenAddress(event.target.value)} required /><br/>

        <label htmlFor="purchaseAmount">Purchase Amount:</label><br/>
        <input type="number" id="purchaseAmount" value={purchaseAmount} onChange={(event) => setPurchaseAmount(event.target.value)} required /><br/>

        <label htmlFor="periodOfTime">Period of Time:</label><br/>
        <input type="text" id="periodOfTime" value={periodOfTime} onChange={(event) => setPeriodOfTime(event.target.value)} required /><br/>

        <label htmlFor="interval">Interval:</label><br/>
        <input type="text" id="interval" value={interval} onChange={(event) => setInterval(event.target.value)} required /><br/>

        <button type="submit">Create Recurring Payment</button>
      </form>
      </div>
    </div>
  );
}

export function Payment(){
  return(
    <form>

    </form>
  )
}



export default EthereumWallet;

//Connect with Metamask;

// const provider = new ethers.providers.Web3Provider(window.ethereum);

// const WalletConnectButton = () => {
//   const [address, setAddress] = useState(null);

//   const connectWallet = async () => {
//     try {
//       await window.ethereum.request({ method: "eth_requestAccounts" });

//       const accounts = await provider.listAccounts();
//       setAddress(accounts[0]);
//     } catch (err) {
//       console.error("Failed to connect wallet:", err);
//     }
//   };

  
  

//   return (
//     <div>
//       {address ? (
//         <p>Connected wallet address: {address}</p>
//       ) : (
//         <button onClick={connectWallet}>Connect Wallet</button>
//       )}
//     </div>
//   );
// };

// export default WalletConnectButton;