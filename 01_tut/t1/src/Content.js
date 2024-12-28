import React,{useState} from 'react'
import {FaTrashAlt} from "react-icons/fa"
import "./App.css";

function Content() {
  const [items,setItems]=useState([
    { 
      id:1,
      cheked:true,
      item:"rex"
    },
    {
      id:2,
      cheked:false,
      item:"zozo"
    },
    {
      id:3,
      cheked:true,
      item:"oma"
    }])
   const handleCheked=(id)=>{
    console.log(`${id}`)
   }

  // const [name,setName]=useState("gary");
  // const[count,setCount] =useState(0)
  //    const handleChange=()=>{
  //       const names=["bob","jhon","nick"];
  //       const int = Math.floor(Math.random()*3)
  //      setName(names[int]); 
        
  //    }
  //    const handleClick=()=>{
  //     setCount(count+1)
  //     console.log(count)
  //    }
  //    const handleClick1=(name)=>{
  //     console.log(`${name}`)
  //    }
  //    const handleClick2=(e)=>{
  //     console.log(e.target)
  //    }
  return (
    <main>
        {/* <p>hello {name}</p>
        <button onClick={handleChange}>change name</button>
        <button onClick={handleClick}>click it</button>
        <button onClick={()=>{handleClick1("dave")}}>click it</button>
        <button onClick={(e)=>{handleClick2(e)}}>click it</button> */}
        <ul>
          {items.map((item)=>(
            <li className='list' key={item.id} >
            <input
              type = "chekbox"
              cheked = {item.cheked}
              onChange={()=>{handleCheked(item.id)}}
             />
             <label>{item.item}</label>
             <FaTrashAlt role='button' tabIndex='0'></FaTrashAlt>
          </li>
          )
            
          )}
        </ul>
        
         
         
    </main>
  )
}

export default Content
