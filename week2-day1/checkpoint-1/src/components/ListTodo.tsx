import type { FunctionComponent } from "react";

export interface ListTodoProps {
    tanggal: string;
    aktivitas: string;
    completed: true | false
}


const ListTodo: FunctionComponent<ListTodoProps> = (props) => {
    return (
        <div className={`p-3 rounded  ${props.completed ? 'bg-red-500' : 'bg-green-500 line-through text-white'}`}>
            <p> tanggal: {props.tanggal} | aktivitas: {props.aktivitas}</p>
        </div >
    );
}

export default ListTodo;