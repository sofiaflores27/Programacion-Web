import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD"); // Moneda base (por defecto USD)
  const [amount, setAmount] = useState(1); // Cantidad inicial (por defecto 1)
  const [exchangeRates, setExchangeRates] = useState({}); // Almacenar los tipos de cambio

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/17de1f8f15f60639be6a4c38/latest/${baseCurrency}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExchangeRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={baseCurrency} onChange={handleCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <h3>Equivalent in other currencies:</h3>
      <ul>
        {Object.keys(exchangeRates).map((currency) => (
          <li key={currency}>
            {amount} {baseCurrency} = {amount * exchangeRates[currency]}{" "}
            {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyConverter;
