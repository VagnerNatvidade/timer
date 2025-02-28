import React from "react";
import Button from "../Button";
import style from "./form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que vc quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="timer"></label>
          <input
            type="time"
            step={1}
            name="time"
            id="time"
            min={"00:00:00"}
            max={"01:30:00"}
          />
        </div>
        <Button title="Adicionar" />
      </form>
    );
  }
}

export default Form;
