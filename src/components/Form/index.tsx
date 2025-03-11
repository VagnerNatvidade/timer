import React, { FormEvent, useState } from "react";
import style from "./form.module.scss";
import Button from "../Button";
import { TasksProps } from "../../types/tasks";
import { v4 as uuidv4 } from "uuid";

interface FromProps {
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}

const Form = ({ setTasks }: FromProps) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addtask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTasks((oldTasks) => [
      ...oldTasks,
      { time, task, selected: false, complete: false, id: uuidv4() },
    ]);

    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addtask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button title="Adicionar" type="submit" />
    </form>
  );
};

export default Form;
