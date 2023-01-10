import currencies from "../currencies";

const Select = ({ selectCurrency, handleCurrencyChange }) => {
  return (
    <>
      <span className="form__labelText">Wybierz walutę:</span>
      <select
        className="form__field"
        value={selectCurrency ? selectCurrency.id : ""}
        onChange={handleCurrencyChange}
      >
        {currencies.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.currency} {currency.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
