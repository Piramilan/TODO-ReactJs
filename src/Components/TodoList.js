import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import classes from "./TodoList.module.css";
import { ImBin2, ImClipboard } from "react-icons/im";

const TodoList = () => {
  //  Array For Save All Items With useState Hook
  const [todos, setTodos] = useState([
    { task: "Hello World", id: "1" },
    { task: "React Js", id: "2" },
    { task: "JavaScript", id: "3" },
  ]);

  // useEffect Hook For When Load The Webpage The Local Storage
  // Saved Array Will Load With Saved Items
  const getTodos = localStorage.getItem("TODO");
  useEffect(() => {
    getTodos && setTodos(JSON.parse(getTodos));
  }, [getTodos]);

  //  The todos Array Will Add New Value
  const addTask = (tasks) => setTodos([tasks, ...todos]);

  //  Remove Item From TODO List
  const removeItem = (itemId) => {
    setTodos((prevState) => prevState.filter(({ id }) => id !== itemId));
  };

  // Function For Clear All List Items
  const clearList = () => {
    setTodos([]);
  };

  // Function For Save All TODO List Item In Local Stroage
  const saveLocal = () => {
    localStorage.setItem("TODO", JSON.stringify(todos));
  };

  const todolistItems = todos.map((todo) => {
    return (
      <Todo
        item={todo.task}
        key={todo.id}
        removeItem={removeItem}
        id={todo.id}
      />
    );
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Todo List</h1>
      <TodoInput addTask={addTask} />
      <ul className={classes.todo_list}>{todolistItems}</ul>
      <div className={classes.btn_container}>
        {/* Clear button to clear the TODO list. */}
        <Button text="Clear" stylesName="btn_clear" onClick={clearList}>
          <ImBin2 />
        </Button>
        {/* Save all the values from the list on the state. */}
        <Button text="Save" stylesName="btn_save" onClick={saveLocal}>
          <ImClipboard />
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
