import { useState } from 'react'
import './App.css'

 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <h1>COUNTER APP</h1>
    <h2>Counter Value {count}</h2>
      <div className="card">
        <button className='green' onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button className='reset' onClick={() => setCount((count) => 0)}>
          RESET
        </button>
        <button className='red' onClick={() => setCount((count) => count - 1)}>
        -
        </button>
      </div>
      </div>
    </>
  )
}

export default App