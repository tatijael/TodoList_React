import React, { useState } from 'react';
import './App.css';
import "./Componentes/style/main.scss"
import AddItem from './Componentes/AddItem';
import Item from "./Componentes/Item"
import Button from './Componentes/Button';
import { FcSurvey } from "react-icons/fc";

function App() {
  const [list, setList] = useState([])
  const [filters, setFilters] = useState(null)
  

  const addItem = (value) =>{
    const newItem = [{ value,isCompleted:false }, ...list];
    setList(newItem)
  }

  const completeItem = index =>{
    const newItem = [...list]
    newItem[index].isCompleted = !newItem[index].isCompleted ;
    setList(newItem)
  }

  const removeItem = index =>{
    const newItem =[...list]
    newItem.splice(index,1)
    setList(newItem)
  }

const changeText = (event, index) =>{
  const newList = [...list]
  newList[index].value = event.target.value
  setList(newList)
}

  return (
    <div className="wrapper"> 
      <h1>ToDo List  <FcSurvey /></h1>
      <AddItem addItem={addItem}/>
      {list.filter(item=>{
        if(filters !== null){
          return filters === item.isCompleted
        }
        return true
      }).map((item, index) =><Item key={index} index={index} item={item} completeItem={completeItem} removeItem={removeItem} changeText={changeText}/>)}
      <Button setFilters={setFilters} changeText={changeText}/>
      

    </div>
    )}

export default App;
