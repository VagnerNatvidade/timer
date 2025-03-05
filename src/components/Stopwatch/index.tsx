import Button from "../Button";
import Watch from "./watch";
import style from "./stopwatch.module.scss";

const Stopwatch = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o relógio.</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button title="Comerçar" />
    </div>
  );
};

export default Stopwatch;
