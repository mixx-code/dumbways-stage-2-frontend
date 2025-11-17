import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoProvider } from './context/TodoProvider'

function App() {

  return (
    <TodoProvider>
      <div className="">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
