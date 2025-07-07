
import { useState,memo } from 'react'

const Child =memo(({etadjective})=>{
  console.log('child render')
  return(
    <>
    <div>chl
    <button onClick={()=>{etadjective()}}>{etadjective()}</button>
    </div>
    </>
  )
})

export default Child;