import Form from "./Form";
import Result from "./Result";
import СlearButton from "./СlearButton";
import ResultButton from "./ResultButton";
import Container from "./Container";
import Timer from "./Timer";
import { useState } from "react";
import { useCurrencyRates } from "./useCurrencyRate";

function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState("EUR");

  const ratesData = useCurrencyRates();

  const handleCalculate = () => {
    const rate = ratesData.rates[currency];

    const abbreviation = currency;
    const calculateResult = amount * rate;
    const result = `${amount} PLN = ${calculateResult.toFixed(2)} ${abbreviation}`;
    setResult(result);
  };

  return (
    <Container>
      <Timer />
      <Form
        amount={amount}
        ratesData={ratesData}
        setAmount={setAmount}
        setCurrency={setCurrency}
        currency={currency}
      />
      {ratesData.state === "loding" ? ("") : (
        <ResultButton calculate={handleCalculate} ratesData={ratesData} />
      )}
      {ratesData.state === "loding" ? ("") : (
        <СlearButton setAmount={setAmount} ratesData={ratesData} />
      )}
      <p>
        Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na
        dzień: {ratesData.date}{" "}
      </p>
      {result && (
        <Result
          amount={amount}
          result={result}
          setResult={setResult}
          ratesData={ratesData}
          currency={currency}
        />
      )}
    </Container>
  );
}

export default App;
