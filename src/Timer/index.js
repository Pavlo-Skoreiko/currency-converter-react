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

  return (
    <p className="timer"> Dzisiaj jest {date.toLocaleDateString("pl",{ 
      year: "numeric", 
      month: "long", 
      weekday: "long",
      day: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      second: "numeric"
   })}</p>
  );
};

export default Timer;
