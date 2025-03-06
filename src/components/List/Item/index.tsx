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
      className={`${style.item} ${
        selected ? style.itemSelecionado : style.item
      } ${complete === true ? style.itemCompletado : style.item}`}
      onClick={() => !complete && selectTask({ task, time, selected, complete, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && (
        <span className={style.concluido} aria-label="Tarefa completa">
          {" "}
        </span>
      )}
    </li>
  );
};

export default Item;
