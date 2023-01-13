import {Reset} from "./styled"

const СlearButton = ({ setAmount }) => {
  const handleClear = () => {
    setAmount("");
  };

  return (
    <Reset onClick={handleClear} >
      Wyczyść
    </Reset>
  );
};

export default СlearButton;