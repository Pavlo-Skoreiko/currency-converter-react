import Select from "../Select";
import "./style.css";

const Form = ({setAmount, selectCurrency, onChange, amount, handleCurrencyChange,}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} onChange={setAmount}>
      <fieldset className="form">
        <legend className="form__legend">
          <h1>Kalkulator walutowy</h1>
        </legend>
        <p>
          <span className="form__labelText">Mam: Kwota w zł</span>
          <input
            onChange={onChange}
            value={amount}
            className="form__field"
            required
            type="number"
            min="0"
            step="0.01"
            placeholder="Posiadam..."
          />
        </p>
        <Select
          handleCurrencyChange={handleCurrencyChange}
          selectCurrency={selectCurrency}
        />
      </fieldset>
    </form>
  );
};

export default Form;
