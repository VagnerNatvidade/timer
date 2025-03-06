import style from "./watch.module.scss";

interface WhatchProps {
  time: number | undefined;
}

const Watch = ({ time = 0 }: WhatchProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesTens, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondTens, secondUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minutesTens}</span>
      <span className={style.relogioNumero}>{minutesUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondTens}</span>
      <span className={style.relogioNumero}>{secondUnit}</span>
    </>
  );
};

export default Watch;
