import { useState, useEffect } from "react"
import "./App.css";
import axios from "axios";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <InputTodo refreshTodos={getTodos}/>
      <ListTodos todos={todos} refreshTodos={getTodos}/>
    </>
  );
}

export default App;
