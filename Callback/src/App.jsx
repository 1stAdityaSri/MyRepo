import { useState,memo,useCallback } from 'react'

import './App.css'
import Child from './Child'

function App() {
  const getadjective=useCallback(()=>{
    console.log("ad chala")
    return "another";

  },[],)

  const [count,setcount]=useState(0)
  
  return(
    <>
    <div>
    <button onClick={()=>setcount(count+1)}>{count}</button>
    <Child etadjective={getadjective}/>
    </div>
    </>
  )
}

export default App
