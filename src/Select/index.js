import { useState } from "react";
import Currencies from "../Currencies";

const Select = () => {
  const [selectCurrency, setSelectCurrency] = useState();

  const handleCurrencyChange = (event) => {
    setSelectCurrency(
      Currencies.find((o) => o.id === parseInt(event.target.value))
    );
  };

  return (
    <>
      <span className="form__labelText">Wybierz walutę:</span>
      <select
        className="form__field"
        value={selectCurrency ? selectCurrency.id : ""}
        onChange={handleCurrencyChange}
      >
        {Currencies.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.currency} {currency.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
