import React, { useState } from 'react';
import './App.css';
import "./Componentes/style/main.scss"
import AddItem from './Componentes/AddItem';
import Item from "./Componentes/Item"


function App() {
  const [list, setList] = useState([])

  const addItem = (value) =>{
    const newItem = [{ value }, ...list];
    setList(newItem)
  }

  const completeItem = index =>{
    const newItem = [...list]
    newItem[index].isCompleted = true;
    setList(newItem)
  }

  const removeItem = index =>{
    const newItem =[...list]
    newItem.splice(index,1)
    setList(newItem)
  }

  return (
    <div className="wrapper"> 
      <h1 className="title">ToDo List</h1>
      <AddItem addItem={addItem}/>
         {list.map((item, index) =>(
          <Item key={index} index={index} item={item} completeItem={completeItem} removeItem={removeItem}/>
  ))}

    </div>
    )}

export default App;
