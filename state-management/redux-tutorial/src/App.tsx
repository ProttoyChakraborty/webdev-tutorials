import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const increaseCount=()=>{
    setCount(count+1)
    console.log(count)
  }
  return (
    <>
        <h1>Count:{count}</h1>
        <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default App
