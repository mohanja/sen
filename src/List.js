import React, { useState } from 'react'

function List() {

    const items=[
        {
            id:1,
            name:"mohan",
            Boolean:true
        },
        {
            id:2,
            name:"ram",
            Boolean:true
        },
        {
            id:3,
            name:"ajram",
            Boolean:false
        }
    ]
    const [list,setlist]=useState(items)

function hadel(id){
    const listId = list.map((list) => list.id===id
    ? {...list,checked:!list.Boolean} : list) 
    setlist(listId)
}

  return (
    <div>
        <ul>
            {items.map((items)=>(
                <li key={items.id}>
                    <input
                    type='checkbox'
                    onChange={()=>hadel(items.id)}
                    checked={items.Boolean}
                    />
                    <label>{items.name}</label>
                    <button tabIndex="0">delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List
