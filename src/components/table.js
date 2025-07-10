import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function formatCoins(value) {
  return value.toFixed(8);
}

export default function ExchangeTable({ amount, error }) {
  const valid = error === "" && amount !== "";

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>Cryptocurrency</th>
          <th>Exchange Rate</th>
          <th>Number of Coins</th>
        </tr>
      </thead>
      <tbody>
        {cryptocurrencyList.map((coin) => {
          const coins =
            valid && !isNaN(parseFloat(amount))
              ? formatCoins(parseFloat(amount) * coin.rate)
              : error === "Amount cannot be empty"
              ? "0.00000000"
              : "n/a";

          return (
            <tr key={coin.code}>
              <td>{coin.name}</td>
              <td>1 USD = {coin.rate} {coin.code}</td>
              <td>{coins}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
