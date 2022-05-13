import React from 'react'
import './listItem.css'
const ListItem = (props) => {
    
  return (
      <>
      <div className="listcontainer">
      <div>
     <li>
      {props.text}
    </li>
      </div>
      <div className="list-btn">
           <button className='list-button' onClick={()=>{
               props.onSelect(props.id)
           }} >Delete</button>
           </div>
           </div>
      </>
  )
}

export default ListItem;
