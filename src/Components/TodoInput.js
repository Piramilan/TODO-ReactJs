import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../UI/Button";
import classes from "./TodoInput.module.css";
import { ImPlus } from "react-icons/im";

const TodoInput = ({ addTask }) => {
  // useRef Hook For Get Input Value
  const todoTextValue = useRef(null);
  // Function For Get The Input Values When Submit Form
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // The Text Value Will Add When Length > 0
    if (todoTextValue.current.value.length > 0) {
      const textValue = todoTextValue.current.value;
      addTask({ task: textValue, id: uuidv4() });
      todoTextValue.current.value = "";
    }
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.form_style}>
      {/* Input Field For TODO */}
      <input
        type="text"
        placeholder="Todo"
        ref={todoTextValue}
        className={classes.input_effect}
      />
      {/* Add button to create a new TODO item. */}
      <Button text="Add" stylesName="btn_add">
        <ImPlus />
      </Button>
    </form>
  );
};

export default TodoInput;
