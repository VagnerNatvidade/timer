import style from "./list.module.scss";
import Item from "./Item";
import { TasksProps } from "../../types/tasks";

interface ListProps {
  tasks: TasksProps[];
  selectTask: (selecetedTask: TasksProps) => void;
}

const List = ({ tasks, selectTask }: ListProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
