import { Button } from "./styled";

const ResultButton = ({ calculate }) => {
  return (
    <Button onClick={calculate} >
      Przelicz !
    </Button>
  );
};

export default ResultButton;
