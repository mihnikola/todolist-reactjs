import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [todoStatus, setTodoStatus] = useState(false);

  const persistData = (newData) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newData }));
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  const handleAddTodos = (newTodo) => {
    const newList = [...todos, newTodo];
    persistData(newList);

    setTodos(newList);
    setTodoStatus(false);
  };

  const handleEditTodos = (index) => {
    setTodoStatus(true);
    const valueEdit = todos[index];
    setTodoValue(valueEdit);
    handleDeleteTodos(index);
  };

  const handleDeleteTodos = (index) => {
    const newList = [...todos];
    const newFilterData = newList.filter((_, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newFilterData);

    setTodos(newFilterData);
  };

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        todoStatus={todoStatus}
      />
      <TodoList
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodos={handleEditTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
