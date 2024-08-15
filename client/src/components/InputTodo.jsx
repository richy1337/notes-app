import { useState } from "react";
import axios from "axios";

function InputTodo({ refreshTodos }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/todos", {
        description: input,
      });
      setInput("")
      refreshTodos()
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <>
      <h1 className="text-center mt-5 text-4xl font-extrabold">
        Pern Todo List
      </h1>
      <form className="flex justify-center mb-6" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "
        />
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Add
        </button>
      </form>
    </>
  );
}

export default InputTodo;
