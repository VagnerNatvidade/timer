import React from "react";
import style from "./style.module.scss";

interface ButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { type = "button" } = this.props;

    return (
      <button type={type} className={style.botao}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
