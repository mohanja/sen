import React from 'react'
import { useState  } from 'react'

function Content() {
  const [current,setCurrent]=useState("LUCKY")
    function random(){
        const array=["LUCKY","UNLUCKY","YOU ARE BAD"]
        const num=Math.floor(Math.random()*3)
       setCurrent(array[num])
      }
  return (
    <main>
<div>Mohan {current}</div>
<button onClick={random}>click</button>
    </main>
  )
}

export default Content