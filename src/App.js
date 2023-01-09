import Form from "./Form";
import Result from "./Result";
import СlearButton from "./СlearButton";
import ResultButton from "./ResultButton";
import Container from "./Container";
import Currencies from "./Currencies";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
 
  const [selectCurrency, setSelectCurrency] = useState({
    id: 1,
    name: "Dolar amerykański",
    currency: "USD",
    rate: 4.39,
  });

  const handleCurrencyChange = (event) => {
    setSelectCurrency(
      Currencies.find((o) => o.id === parseInt(event.target.value))
    );
  };

  const rate = selectCurrency.rate;
  const abbreviation = selectCurrency.currency;

  const handleCalculate = () => {
    const calculateResult = amount / rate;
    const result = `${amount} PLN = ${calculateResult.toFixed(
      2
    )} ${abbreviation}`;
    setResult(result);
  };

  return (
    <Container className="container">
      <Form
        handleCurrencyChange={handleCurrencyChange}
        selectCurrency={selectCurrency}
        amount={amount}
        onChange={({ target }) => setAmount(target.value)}
      />
      <ResultButton calculate={handleCalculate} />
      <СlearButton setAmount={setAmount} />
      <p>Podane w tabeli kursy walut są przykładowe</p>
      {result && (
        <Result
          amount={amount}
          result={result}
          selectCurrency={selectCurrency}
        />
      )}
    </Container>
  );
}

export default App;
