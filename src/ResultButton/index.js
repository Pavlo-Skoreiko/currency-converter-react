import "./style.css";

const ResultButton = ({ calculate }) => {
  return (
    <button onClick={calculate} className="button">
      Przelicz !
    </button>
  );
};

export default ResultButton;
