import React from "react";
import "./HoldingsTable.css";

const HoldingsTable = ({ holdings, selected, onToggle }) => {
  return (
    <div className="table-scroll-container">
      <table className="holdings-table">
        <thead>
          <tr>
            <th></th>
            <th>Asset</th>
            <th>Holdings</th>
            <th>Total Current Value</th>
            <th>Short-term</th>
            <th>Long-term</th>
            <th>Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={() => onToggle(index)}
                />
              </td>
              <td>
                <img src={item.logo} alt="logo" className="logo" />
                {item.coinName}
              </td>
              <td>
                {item.totalHolding} {item.coin}
              </td>
              <td>${(item.currentPrice ?? 0).toLocaleString()}</td>
              <td className={item.stcg.gain > 0 ? "green" : "red"}>
                {item.stcg.gain >= 0 ? "+" : "-"}${Math.abs(item.stcg.gain)}
              </td>
              <td className={item.ltcg.gain > 0 ? "green" : "red"}>
                {item.ltcg.gain >= 0 ? "+" : "-"}${Math.abs(item.ltcg.gain)}
              </td>
              <td>{selected.includes(index) ? `${item.totalHolding}` : "-"}</td>
            </tr>
          ))}
        </tbody>
        <button className="button">View All</button>
      </table>
    </div>
  );
};

export default HoldingsTable;
