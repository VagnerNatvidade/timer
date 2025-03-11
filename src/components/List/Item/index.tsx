import { TasksProps } from "../../../types/tasks";
import style from "./item.module.scss";

interface ItemProps extends TasksProps {
  selectTask: (selecetedTask: TasksProps) => void;
}

const Item = ({
  task,
  time,
  selected,
  complete,
  id,
  selectTask,
}: ItemProps) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : style.item} ${
        complete === true ? style.itemComplete : style.item
      }`}
      onClick={() =>
        !complete && selectTask({ task, time, selected, complete, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && (
        <span className={style.finished} aria-label="Tarefa completa">
          {" "}
        </span>
      )}
    </li>
  );
};

export default Item;
