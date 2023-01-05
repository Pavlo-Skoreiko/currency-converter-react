import Form from "./Form"
import Buttons from "./Buttons";
import Result from "./Result";
import Container from "./Container";

function App() {
  return (
    <Container className="container">
      <Form />
      <Buttons />
      <Result />
    </Container>
  );
}

export default App;
