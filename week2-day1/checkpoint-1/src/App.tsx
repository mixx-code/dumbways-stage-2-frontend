import { useState } from 'react';
import './App.css'
import ListTodo, { type ListTodoProps } from './components/ListTodo'


const dataTodoList: ListTodoProps[] = [
  { aktivitas: "lari pagi", tanggal: "12 nov 2025", completed: true },
  { aktivitas: "belajar coding", tanggal: "13 nov 2025", completed: false },
  { aktivitas: "meeting", tanggal: "14 nov 2025", completed: true },
];

function App() {

  const [dataTodo, setDataTodo] = useState(dataTodoList)

  const toggleCompleted = (index: number) => {
    setDataTodo(prevData =>
      prevData.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }


  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-2/4'>
        <div className='p-5 flex flex-col gap-3'>
          <h1>My ToDo List</h1>
          <p>klik todo bila sudah compeleted</p>
        </div>
        <div className='flex flex-col gap-5'>
          {
            dataTodo.length === 0 ? (
              <p>Kamu Belum Memiliki Data Todo List</p>
            ) : (
              dataTodo.map((todo: ListTodoProps, index: number) => {
                return (
                  <>
                    <div key={index} onClick={() => toggleCompleted(index)}>

                      <ListTodo completed={todo.completed} aktivitas={todo.aktivitas} tanggal={todo.tanggal} />
                    </div>
                  </>
                )
              })
            )
          }
        </div>

      </div>
    </div>
  )
}

export default App
