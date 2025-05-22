import React from "react";
import "./AfterHarvest.css";

const AfterHarvest = ({ gainsData, savings }) => {
  const { stcg, ltcg } = gainsData;

  const netSTCG = stcg.profits - stcg.losses;
  const netLTCG = ltcg.profits - ltcg.losses;
  const totalGains = netSTCG + netLTCG;

  return (
    <div className="after-harvesting-card">
      <h2>After Harvesting</h2>
      <div className="section">
        <div>
          <h4>Short-term</h4>
          <p>Profits:  ${(stcg.profits ?? 0).toLocaleString()}</p>
          <p>Losses: - ${(stcg.losses ?? 0).toLocaleString()}</p>
          <p>
            Net Capital Gains: {netSTCG < 0 ? "-" : ""}${Math.abs(netSTCG)}
          </p>
        </div>
        <div>
          <h4>Long-term</h4>
          <p>Profits:  ${(ltcg.profits ?? 0).toLocaleString()}</p>
          <p>Losses: - ${(ltcg.losses ?? 0).toLocaleString()}</p>
          <p>
            Net Capital Gains: {netLTCG < 0 ? "-" : ""}${Math.abs(netLTCG)}
          </p>
        </div>
      </div>
      <h3>
        Effective Capital Gains: {totalGains < 0 ? "-" : ""}$
        {Math.abs(totalGains)}
      </h3>
      {savings > 0 && (
        <div className="savings-line">
           You are going to save up to ${savings.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default AfterHarvest;
