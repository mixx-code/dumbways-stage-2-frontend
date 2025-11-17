import { useTodo } from "@/hooks/useTodo";
import type { Todo } from "@/types/Todo";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const TodoItem = ({todo} : {todo:Todo}) => {
    const {updateTodo, deleteTodo, toggleComplate, loading} = useTodo();
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(todo.text)

    const handleUpdate = () => {
        updateTodo(todo.id, text)
        setIsEditing(false)
    }

    return ( 
        <div className="grid grid-cols-4">
            <input 
                type="checkbox"
                checked={todo.complated}
                onChange={() => toggleComplate(todo.id)}
            />
            {isEditing ? (
                <>
                    <Input 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={loading}
                    />
                    <Button onClick={handleUpdate} variant="outline">Save</Button>
                </>
            ) : (
                <>
                <span className={todo.complated ? 'line-through' : ''}>{todo.text}</span>
                <Button className="w-32" onClick={() => setIsEditing(true)} disabled={loading}>Edit</Button>
                </>
            )}
            <Button className="w-32 bg-red-600" onClick={() => deleteTodo(todo.id)} disabled={loading}>Delete</Button>
        </div>
     );
}
 
export default TodoItem;