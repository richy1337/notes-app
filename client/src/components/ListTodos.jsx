import TodoRow from "./TodoRow"

function ListTodos({ todos, refreshTodos }) {
  return (
    <>
      <table className="table-auto w-full border">
        <thead className="border">
          <tr>
            <th className="w-[70%] text-left">Description</th>
            <th className="w-[15%] text-left">Edit</th>
            <th className="w-[15%] text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return <TodoRow key={todo.todo_id} id={todo.todo_id} description={todo.description} refreshTodos={refreshTodos}/>
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
