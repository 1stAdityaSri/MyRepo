import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { createContext } from "react";

function Form(){
  const [count,setCount]=useState(0)
  
  const [email,setemail]=useState("")
  const [petname,setpetname]=useState("")
  console.log(email,petname)
  
  return(
    <>
     <counterContext.Provider value={{count, setCount}}>

    <Navbar/>
    <div>
        <input type="text" name="petname" id="" value={petname} onChange={(e) => setpetname(e.target.value)}/>
        <input type="text" name="email" id="" value={email} onChange={(e) => setemail(e.target.value)}/>
    </div>
          <p>{petname}🤣🤣 {email}</p>
  </counterContext.Provider>

</>
   );
   
   
  }
  
  export default Form;
  export const counterContext= createContext(0)
  