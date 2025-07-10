import React, { useState } from "react";
import ExchangeTable from "./table";
import { cryptocurrencyList } from "../cryptocurrency-list";
import "../App.css";

const AVAILABLE_BALANCE = 17042.67;

export default function Main() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const validateAmount = (value) => {
    if (value === "") {
      setError("Amount cannot be empty");
      return false;
    }
    const num = parseFloat(value);
    if (isNaN(num)) {
      setError("Amount must be a number");
      return false;
    }
    if (num < 0.01) {
      setError("Amount cannot be leass than 0.01");
      return false;
    }
    if (num > AVAILABLE_BALANCE) {
      setError("Amount cannot exceed the available balance.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    validateAmount(value);
  };

  return (
    <div className="container">
      <h2>CryptoRank Exchange</h2>
      <div className="input-section">
        <label>
          I want to exchange $
          <input
            type="number"
            value={amount}
            onChange={handleChange}
            placeholder="USD"
            step="0.01"
            min="0.01"
          />
          of my ${AVAILABLE_BALANCE.toFixed(2)}:
        </label>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ExchangeTable amount={amount} error={error} />
    </div>
  );
}
