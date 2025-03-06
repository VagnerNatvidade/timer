import React from "react";
import style from "./style.module.scss";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button", onClick } = this.props;

    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
