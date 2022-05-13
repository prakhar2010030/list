import React,{useState}from 'react'
import './List.css'
import ListItem from './ListItem';
const DiscoList = () => {
const [data, setData] = useState("");

const inputData = (e) =>{
    setData(e.target.value)
}
const [listItem,setListItem] = useState([]);

const Add =() =>{
    setListItem((olditems)=>{
        return [...olditems,data];
    });
    setData("");
}
const Delete = (id) =>{
   setListItem((olditems)=>{
       return olditems.filter((element,index)=>{
           return index !== id;
       })
   })
}
const DeleteAll = () =>{
    setListItem([]);
}

  return (
    <div className='ListContainer'>
        <div className="container">
      <span className='heading'>ToDo List</span>
       <div className="search">
           <input  className='input-field' type="text" placeholder="Enter your list" value={data} onChange={inputData}/>
       </div>
       <div className="btn">
           <button className='add-button add-buttonA' onClick={Add}>Add</button>
           <button className='add-button add-buttonD' onClick={DeleteAll}>Delete All</button>
       </div>
       <ol className='list'>
       {listItem.map((value,id)=>{
                 return <ListItem 
                 key  = {id}
                 text = {value} 
                 id={id}
                 onSelect ={Delete}/>
               })}
       </ol>
               
    </div>
    </div>
  )
}

export default DiscoList
