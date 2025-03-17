import React from "react";

const PriceDetails = ({ prices, loading }) => {
  return (
    <div className="price-card">
      {loading ? (
        <p>Loading prices...</p>
      ) : (
        <>
          <p> <strong>USD:</strong> ${prices.usd}</p>
          <p> <strong>EUR:</strong> €{prices.eur}</p>
          <p> <strong>GBP:</strong> £{prices.gbp}</p>
        </>
      )}
    </div>
  );
};

export default PriceDetails;
