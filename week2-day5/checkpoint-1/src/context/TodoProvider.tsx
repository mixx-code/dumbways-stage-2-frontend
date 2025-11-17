import type { Todo } from "@/types/Todo"
import { useState } from "react"
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(false)
    const [idCounter, setIdCounter] = useState(1)

    const createTodo = (text: string) => {
        setLoading(true)
        const newTodo:Todo = { id: idCounter, text, complated: false }
        setTodos((prev) => [newTodo, ...prev])
        setIdCounter((prev) => prev + 1)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    const updateTodo = (id: number, text: string) => {
        setLoading(true)
        setTodos((prev) =>
            prev.map((todo) => todo.id === id ? { ...todo, text } : todo))
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    const deleteTodo = (id: number) => {
        setTodos((prev) =>
        prev.filter((todo) => todo.id !== id))
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }
    const toggleComplate = (id: number) => {
        // setLoading(true)
        setTodos((prev) =>
            prev.map((todo) => todo.id === id ? { ...todo, complated: !todo.complated } : todo))
    }

    return (
        <TodoContext.Provider value={{todos, createTodo, updateTodo, deleteTodo, toggleComplate, loading}}>
            {children}
        </TodoContext.Provider>
    )
}