import { useState } from 'react'
import './App.css'

 function App() {
  const [count, setCount] = useState(0)
  const resetButton = () => {
      setCount(0)
  }
  const increaseButton = () => {
      setCount(count+1)
  }
  const decreaseButton = () => {
    if(count === 0){
      setCount(0)
    }
    else{
      setCount(count-1);
    }
  }
  return (
    <>
    <div className="container">
    <h1>COUNTER APP</h1>
    <h2>Counter Value {count}</h2>
      <div className="card">
        <button className='green' onClick={increaseButton}>
          +
        </button>
        <button className='reset' onClick={resetButton}>
          RESET
        </button>
        <button className='red' onClick={decreaseButton}>
        -
        </button>
      </div>
      </div>
    </>
  )
}

export default App