import React from "react";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue, todoStatus } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        {todoStatus ? "Edit" : "Add"}
      </button>
    </header>
  );
};

export default TodoInput;
