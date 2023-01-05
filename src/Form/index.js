import "./style.css";

const Form = () => (
  <form>
    <fieldset className="form">
    <legend className="form__legend">
      <h1>Kalkulator walutowy</h1>
    </legend>
    <p>
      <span className="form__labelText">Mam: Kwota w zł</span>
      <input
        className="form__field"
        required
        type="number"
        min="0"
        step="0.01"
        placeholder="Posiadam..."
      />
    </p>
    <p>
      <label>
        <span className="form__labelText">Wybierz walutę</span>
      </label>
      <select className="form__field">
        <option value="EUR">EUR Euro</option>
        <option value="USD">USD Dolar amerykański</option>
        <option value="GBP">GBP Funt brytyjski</option>
      </select>
    </p>
    </fieldset>
  </form>
);

export default Form;


