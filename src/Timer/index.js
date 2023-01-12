import "./style.css";
import { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = date.toLocaleDateString("pl",{ 
    year: "numeric", 
    month: "long", 
    weekday: "long",
    day: "numeric", 
    hour: "numeric", 
    minute: "numeric", 
    second: "numeric"
 });

  return (
    <p className="timer"> Dzisiaj jest {formatDate}</p>
  );
};

export default Timer;
