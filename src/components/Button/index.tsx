import React from "react";
import style from "./style.module.scss";

interface ButtonProps {
  title: string;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return <button className={style.botao}>{this.props.title}</button>;
  }
}

export default Button;
