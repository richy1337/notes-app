import { useState } from "react";
import axios from "axios";

function EditTodo({ id, description, refreshTodos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(description);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  async function handleClick() {
    try {
      await axios.put(`http://localhost:8080/todos/${id}`, {
        description: input,
      });
    } catch (error) {
      console.log(error.message);
    }
    closeModal();
    refreshTodos();
  }

  function handleClose() {
    setInput(description)
    closeModal();
  }

  return (
    <>
      <button
        onClick={openModal}
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Edit Todo</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                {/* Your form or content goes here */}
                <input
                  value={input}
                  className="w-full"
                  onChange={handleChange}
                ></input>
              </p>
            </div>
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
              <button
                onClick={handleClick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTodo;
