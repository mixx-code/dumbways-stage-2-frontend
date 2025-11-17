import { useTodo } from "@/hooks/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {todos, loading} = useTodo()
    return ( 
        <div className="">
            <h1>Todo List</h1>
            {loading && <p className="mt-6">Loading...</p>}
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
     );
}
 
export default TodoList;