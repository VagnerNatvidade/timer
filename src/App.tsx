import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import style from "./app.module.scss";
import Stopwatch from "./components/Stopwatch";
import { TasksProps } from "./types/tasks";

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
