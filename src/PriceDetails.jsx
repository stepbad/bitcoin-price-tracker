import React from "react";
import { FaDollarSign, FaEuroSign, FaPoundSign } from "react-icons/fa";

const PriceDetails = ({ prices, loading }) => {
  return (
    <div className="price-card">
      {loading ? (
        <div className="loader"></div> 
      ) : (
        <>
          <p><FaDollarSign /> <strong>USD:</strong> ${prices.usd}</p>
          <p><FaEuroSign /> <strong>EUR:</strong> €{prices.eur}</p>
          <p><FaPoundSign /> <strong>GBP:</strong> £{prices.gbp}</p>
        </>
      )}
    </div>
  );
};

export default PriceDetails;
