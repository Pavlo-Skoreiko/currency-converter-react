import {useCurrentDate} from "./useCurrentDate";
import { Chronometer } from "./styled";

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
    <Chronometer>
        Dzisiaj jest
        {" "}
        {formatDate(date)}
    </Chronometer>
  );
};

export default Timer;
