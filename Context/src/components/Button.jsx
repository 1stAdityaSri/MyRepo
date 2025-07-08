import React,{useContext} from 'react'
import {counterContext} from '../App.jsx';
import Comp from './component1'
const Button=()=>{
     const value=useContext(counterContext)
   
   return (
    <>
        
        
     <button onClick={() => value.setCount((count) => count + 1)}><Comp/> press me</button>
    </>
   )
}

export default Button;