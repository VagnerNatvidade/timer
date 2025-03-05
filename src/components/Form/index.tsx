import React, { FormEvent } from "react";
import Button from "../Button";
import style from "./form.module.scss";
import { TasksProps } from "../../types/tasks";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}> {
  state = {
    task: "",
    time: "00:00:00",
  };

  addtask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((oldTasks) => [...oldTasks, { ...this.state }]);
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addtask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
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
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button title="Adicionar" type="submit" />
      </form>
    );
  }
}

export default Form;
