import React from "react";
import classes from "./Todo.module.css";
import Button from "../UI/Button";
import { ImCross } from "react-icons/im";

const Todo = ({ item, removeItem, id }) => {
  return (
    <div className={classes.item_container}>
      {/* TODO Item */}
      <li className={classes.item_list}>{item}</li>
      {/* Delete button for individual items. */}
      <Button
        text="Delete"
        stylesName="btn_delete"
        onClick={() => removeItem(id)}
      >
        <ImCross />
      </Button>
    </div>
  );
};

export default Todo;
