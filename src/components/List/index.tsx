import style from "./list.module.scss";
import Item from "./Item";
import { TasksProps } from "../../types/tasks";

const List = ({ tasks }: { tasks: TasksProps[] }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
