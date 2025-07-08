import React,{useContext} from 'react'
import {counterContext} from '../App.jsx';

const Comp=()=>{
  const divStyle = {
      backgroundColor: 'lightblue',
      border: `${useContext(counterContext).count}px solid green`
  
    };
 
    return (
        <>
        <div style={divStyle}>
          
          {useContext(counterContext).count}
        </div>
        </>
    )
}

export default Comp;
