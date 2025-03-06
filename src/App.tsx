import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import style from "./app.module.scss";
import Stopwatch from "./components/Stopwatch";
import { TasksProps } from "./types/tasks";

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [selected, setSelected] = useState<TasksProps>();

  function selectTask(selectedTask: TasksProps) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return { ...task, selected: false, complete: true };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
