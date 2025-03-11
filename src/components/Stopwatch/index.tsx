import Button from "../Button";
import Watch from "./watch";
import style from "./stopwatch.module.scss";
import { TasksProps } from "../../types/tasks";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface StopwatchProps {
  selected: TasksProps | undefined;
  finishTask: () => void;
}

const Stopwatch = ({ selected, finishTask }: StopwatchProps) => {
  const [time, setTime] = useState<number>();

  const countdown = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      finishTask();
    }, 1000);
  };

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected?.time));
    }
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o relógio.</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>

      <Button title="Comerçar" type="button" onClick={() => countdown(time)} />
    </div>
  );
};
export default Stopwatch;
