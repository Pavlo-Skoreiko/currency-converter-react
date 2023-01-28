import {
  Field,
  Title,
  LabelForm,
  Input,
  LabelSelect,
  InputSelect,
  Loading,
  Failing,
} from "./styled";
const Form = ({ ratesData, amount, setAmount, currency, setCurrency }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Field>
        <Title>
          <h1>Kalkulator walutowy</h1>
        </Title>
        {ratesData.state === "loading" ? (
          <Loading>
            Proszę czekać <br />
            Ładuję kursy walut z Europejskiego Banku Centralnego.
          </Loading>
        ) : ratesData.state === "error" ? (
          <Failing>
            Coś poszło nie tak... Sprawdź, czy masz połączenie z internetem.
          </Failing>
        ) : (
          <>
            <p>
              <LabelForm>Mam: Kwota w zł </LabelForm>
              <Input
                onChange={({ target }) => setAmount(target.value)}
                value={amount}
                required
                type="number"
                min="0"
                step="0.01"
                placeholder="Posiadam..."
              />
            </p>
            <LabelSelect> Wybierz walutę: </LabelSelect>
            <InputSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {!!ratesData.rates &&
                Object.keys(ratesData.rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </InputSelect>
          </>
        )}
      </Field>
    </form>
  );
};

export default Form;
