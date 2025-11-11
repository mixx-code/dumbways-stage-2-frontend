// import { useState } from 'react'
import './App.css'
import CardProduct from './components/CardProduct'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CardProduct name='sapu' price={20_000} imageUrl='https://placehold.co/200x200' />
    </>
  )
}

export default App
