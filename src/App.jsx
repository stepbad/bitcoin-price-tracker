import React, { useState, useEffect } from "react";
import PriceDetails from "./PriceDetails";
import { FaBitcoin } from "react-icons/fa"; // Bitcoin icon
import dayjs from "dayjs";

const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp";

const App = () => {
  const [prices, setPrices] = useState({ usd: 0, eur: 0, gbp: 0 });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPrices(data.bitcoin);
      setLastUpdated(dayjs().format("HH:mm:ss"));
    } catch (error) {
      console.error("Error fetching Bitcoin prices:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1><FaBitcoin /> Bitcoin Price Tracker</h1>
      <PriceDetails prices={prices} loading={loading} />
      <p className="timestamp">Last Updated: {lastUpdated || "Fetching..."}</p>
      <button onClick={fetchPrices} className="refresh-btn">Refresh Price</button>
    </div>
  );
};

export default App;
