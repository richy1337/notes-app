import axios from "axios"

function DeleteTodo({id, refreshTodos}) {

    async function handleDelete() {
        try {
            await axios.delete(`http://localhost:8080/todos/${id}`)
            refreshTodos();
        } catch(error) {
            console.log(error.message)
        }
    }

    return(
        <button onClick={handleDelete} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
    )
}

export default DeleteTodo