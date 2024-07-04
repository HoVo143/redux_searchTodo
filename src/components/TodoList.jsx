import { useSelector } from "react-redux"
import TodoItem from "./TodoIterm"

const TodoList = () => {

  const filteredTodos = useSelector((state) => {
    const todos = state.todos
    const filter = state.filter
    const searchTerm = state.searchTerm

    return todos.filter((todo) => {
      const matchsFilter = (filter === "COMPLETED" && todo.completed) 
      || (filter === "INCOMPLETE" && !todo.completed)
      || (filter === "ALL")

      const matchsSearch = todo.text.toLowerCase().includes(searchTerm)

      return matchsFilter && matchsSearch
    })
  })

  return (
    <div>
      <li className="my-2 text-sm italic">All your Notes here...</li>
      {
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index}/>
        ))
      }
    </div>
  )
}

export default TodoList
