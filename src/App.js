import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
      result.json().then((resp)=>{
        //console.warn("result",resp)
        setData(resp)
      })
    })
  },[]);

  function deleteUser(id){
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method: "DELETE"
    }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
        })
    })
  }

  console.warn(data);
  return (
    <div className="App">
      <h1 className='heading'>ToDo list</h1>
      <table className='Table'>
        <tr className='TableRow'>
          <td id='todoHeadings' className='tableData'>User ID</td>
          <td id='todoHeadings' className='tableData'>ID</td>
          <td id='todoHeadings' className='tableData'>Title</td>
          <td id='todoHeadings' className='tableData'>Completed</td>
          <td id='todoHeadings' className='tableData'>Operations</td>
        </tr>
        {
          data.slice(0,10).map((item)=>
          <tr className='TableRow'>
          <td className='tableData'>{item.userId}</td>
          <td className='tableData'>{item.id}</td>
          <td className='tableData'>{item.title}</td>
          <td className='tableData'>{item.completed}</td>
          <td className='tableData' onClick={()=>deleteUser(item.id)}><button>Delete</button></td>
        </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
