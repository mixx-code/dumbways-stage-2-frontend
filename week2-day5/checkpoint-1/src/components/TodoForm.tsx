import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTodo } from "@/hooks/useTodo";

const TodoForm= () => {
    const [text, setText] = useState<string>('');
    const {loading, createTodo} = useTodo()

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        if (!text.trim()) return
        createTodo(text)
        setText('')
        console.log("tes")
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Input
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Masukan task baru...."
                disabled={loading}
            />
            <Button 
                variant="outline"
                className="bg-secondary cursor-pointer"
                disabled={loading}
            >Add Todo</Button>
        </form>
     );
}
 
export default TodoForm;