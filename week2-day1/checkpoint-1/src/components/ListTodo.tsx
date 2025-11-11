import type { FunctionComponent } from "react";

export interface ListTodoProps {
    tanggal: string;
    aktivitas: string;
    completed: true | false
}


const ListTodo: FunctionComponent<ListTodoProps> = (props) => {
    return (
      <div
        className={`p-3 rounded  ${
          props.completed
            ? "bg-green-500 line-through text-white"
            : "bg-red-500"
        }`}
      >
        <p>
          {" "}
          tanggal: {props.tanggal} | aktivitas: {props.aktivitas}
        </p>
      </div>
    );
}

export default ListTodo;