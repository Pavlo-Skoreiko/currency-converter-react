import Select from "../Select";
import { Field, Title, LabelForm, Input } from "./styled";

const Form = ({setAmount, selectCurrency, onChange, amount, handleCurrencyChange,}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} onChange={setAmount}>
      <Field>
        <Title>
          <h1>Kalkulator walutowy</h1>
        </Title>
        <p>
          <LabelForm>Mam: Kwota w zł </LabelForm>
          <Input
            onChange={onChange}
            value={amount}
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
      </Field>
    </form>
  );
};

export default Form;
