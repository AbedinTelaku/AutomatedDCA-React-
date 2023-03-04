import React, { useState } from 'react';

function NewRecurringPaymentForm() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [purchaseAmount, setPurchaseAmount] = useState('');
  const [periodOfTime, setPeriodOfTime] = useState('');
  const [interval, setInterval] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tokenAddress">Token Address:</label>
      <input type="text" id="tokenAddress" value={tokenAddress} onChange={(event) => setTokenAddress(event.target.value)} required />

      <label htmlFor="purchaseAmount">Purchase Amount:</label>
      <input type="number" id="purchaseAmount" value={purchaseAmount} onChange={(event) => setPurchaseAmount(event.target.value)} required />

      <label htmlFor="periodOfTime">Period of Time:</label>
      <input type="text" id="periodOfTime" value={periodOfTime} onChange={(event) => setPeriodOfTime(event.target.value)} required />

      <label htmlFor="interval">Interval:</label>
      <input type="text" id="interval" value={interval} onChange={(event) => setInterval(event.target.value)} required />

      <button type="submit">Create Recurring Payment</button>
    </form>
  );
}
export default NewRecurringPaymentForm;