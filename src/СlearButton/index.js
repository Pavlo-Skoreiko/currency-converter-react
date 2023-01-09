import "./style.css";

const СlearButton = ({ setAmount }) => {
  const handleClear = () => {
    setAmount("");
  };

  return (
    <button onClick={handleClear} className="button__clear">
      Wyczyść
    </button>
  );
};

export default СlearButton;