import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo"

function TodoRow({ id, description, refreshTodos }) {
    return (
        <>
            <tr>
                <td>{description}</td>
                <td><EditTodo id={id} description={description} refreshTodos={refreshTodos}/></td>
                <td><DeleteTodo id={id} refreshTodos={refreshTodos}/></td>
            </tr>
        </>
    )
}

export default TodoRow