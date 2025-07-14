import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterslice'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
        
      <div>
     <button onClick={() => dispatch(increment())}>+</button>
       our count is {count}
     <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  )
}

export default App
