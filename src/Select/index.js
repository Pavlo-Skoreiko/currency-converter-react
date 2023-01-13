import currencies from "../currencies";
import {LabelSelect, InputSelect} from "./styled"

const Select = ({ selectCurrency, handleCurrencyChange }) => {
  return (
    <>
      <LabelSelect> Wybierz walutę: </LabelSelect>
      <InputSelect
        value={selectCurrency ? selectCurrency.id : ""}
        onChange={handleCurrencyChange}
      >
        {currencies.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.currency} {currency.name}
          </option>
        ))}
      </InputSelect>
    </>
  );
};

export default Select;
