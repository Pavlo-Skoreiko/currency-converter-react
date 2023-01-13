import "./style.css";
import {useCurrentDate} from "./useCurrentDate";

const formatDate = (date) =>  date.toLocaleDateString("pl", {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const Timer = () => {
  const date = useCurrentDate();

  return ( 
    <p className="timer">
        Dzisiaj jest
        {" "}
        {formatDate(date)}
    </p>
  );
};

export default Timer;
