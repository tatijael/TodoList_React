import React, { useState } from "react";

const AddItem = ({addItem}) =>{
    const [InputValue, setInputValue] = useState(" ")

const sendText = (event) =>{
    event.preventDefault();
    if(!InputValue) return
    addItem(InputValue)
    setInputValue("")


}
// const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };
    return(
        <div className="componenteSend">
        <label htmlFor="list"></label>
        <input id='list' placeholder="Ingrese una tarea" type='text' value={InputValue} onChange={event =>{
            setInputValue(event.target.value)
        }}/>
        <button className="btn-send"onClick={sendText}>Añadir</button>
        </div>
    )
 }

export default AddItem;