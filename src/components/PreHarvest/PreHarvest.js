import React from "react";
import "./PreHarvest.css";

const PreHarvest = ({ data }) => {
  const shortTermGains = data?.stcg?.profits - data?.stcg?.losses;
  const longTermGains = data?.ltcg?.profits - data?.ltcg?.losses;
  const realisedCapitalGains = shortTermGains + longTermGains;

  return (
    <div className="container-card">
      <div className="heading">Pre Harvesting</div>
      <div className="preHarvest-header header">
        <div></div>
        <div>Short-Term</div>
        <div>Long-Term</div>
      </div>
      <div className="preHarvest-header bold">
        <div>Profits</div>
        <div>${data?.stcg?.profits?.toLocaleString()}</div>
        <div>${data?.ltcg?.profits?.toLocaleString()}</div>
      </div>
      <div className="preHarvest-header bold">
        <div>losses</div>
        <div>-${data?.stcg?.losses?.toLocaleString()}</div>
        <div>-${data?.ltcg?.losses?.toLocaleString()}</div>
      </div>
      <div className="preHarvest-header bold">
        <div>Net Capital Gains</div>
        <div>${shortTermGains.toLocaleString()}</div>
        <div>${longTermGains.toLocaleString()}</div>
      </div>
      <div className="realised-gains">
        <span>Realised Capital Gains:</span>
        <span className="amount">
          ${realisedCapitalGains?.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default PreHarvest;
