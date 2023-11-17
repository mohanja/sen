import React, { useState } from 'react'

function Practies() {
    function gacessNum(){
        const arry =["Mohan","Ram","AJRam"]
        const random=Math.floor(Math.random()*3)
        return arry[random]
    }

const [count,setCount]=useState(99)

function inncers(){
    setCount(preCount=>preCount+1)
}
function decers(){
    setCount(preCount=>preCount-1)
}
  return (
    <div className='text'>
        <p>Add Number</p>
        <button>click</button>
        <button onClick={inncers}>👍</button>
        <span>{count}</span>
        <button onClick={decers}>👎</button>
    </div>
  )
}

export default Practies