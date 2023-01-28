import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({ state: "loding" });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch (error) {
        console.error("Something bad happened!", error);
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};
