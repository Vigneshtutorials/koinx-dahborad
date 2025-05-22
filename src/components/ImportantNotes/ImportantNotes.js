import React, { useState } from 'react';
import './ImportantNotes.css';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

const ImportantNotes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotes = () => setIsOpen(!isOpen);

  return (
    <div className="important-notes-container">
      <div className="important-notes-header" onClick={toggleNotes}>
        <Info className="info-icon" />
        <h2>Important Notes And Disclaimers</h2>
        {isOpen ? <ChevronUp className="chevron-icon" /> : <ChevronDown className="chevron-icon" />}
      </div>
      {isOpen && (
        <ul className="important-notes-list">
          <li>
            <strong>Price Source Disclaimer:</strong> Please note that the current price of your coins may differ from the prices listed on specific exchanges. This is because we use <strong>CoinGecko</strong> as our default price source for certain exchanges, rather than fetching prices directly from the exchange.
          </li>
          <li>
            <strong>Country-specific Availability:</strong> Tax loss harvesting may <strong>not be supported in all countries</strong>. We strongly recommend consulting with your local tax advisor or accountant before performing any related actions on your exchange.
          </li>
          <li>
            <strong>Utilization of Losses:</strong> Tax loss harvesting typically allows you to offset capital gains. However, if you have <strong>zero or no applicable crypto capital gains</strong>, the usability of these harvested losses may be limited. Kindly confirm with your tax advisor how such losses can be applied in your situation.
          </li>
        </ul>
      )}
    </div>
  );
};

export default ImportantNotes;
