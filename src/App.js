import React, { useState } from 'react';
import './App.css';
import "./Componentes/style/main.scss"
import AddItem from './Componentes/AddItem';
import Item from "./Componentes/Item"
import Button from './Componentes/Button';

function App() {
  const [list, setList] = useState([])
  const [filters, setFilters] = useState(null)

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



/// null ->son todos los item
// iscomple == filter-> son todos los competos
// is completed false -> incompletos

  return (
    <div className="wrapper"> 
      <h1 className="title">ToDo List</h1>
      <AddItem addItem={addItem}/>
      {list.filter(item=>{
        if(filters){
          return filters === item.isCompleted
        }
        return true
      }).map((item, index) =><Item key={index} index={index} item={item} completeItem={completeItem} removeItem={removeItem}/>)}
      <Button incompleto={()=>setFilters()} todos={()=>setFilters(false)} complete={()=>setFilters(true) }/>
      

    </div>
    )}

export default App;
