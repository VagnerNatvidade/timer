import style from "./button.module.scss";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ title, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {title}
    </button>
  );
};

export default Button;
