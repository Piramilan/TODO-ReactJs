import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { stylesName } = props;
  let styles;
  switch (stylesName) {
    case "btn_add":
      styles = classes.btn_add;
      break;
    case "btn_delete":
      styles = classes.btn_delete;
      break;
    case "btn_save":
      styles = classes.btn_save;
      break;
    case "btn_clear":
      styles = classes.btn_clear;
      break;
    default:
      break;
  }

  return (
    <button onClick={props.onClick} className={styles}>
      <span className={classes.text}>{props.text}</span>
      <span className={classes.icon}>{props.children}</span>
    </button>
  );
};

export default Button;
