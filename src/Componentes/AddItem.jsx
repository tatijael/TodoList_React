import React, { useState } from "react";

const AddItem = ({addItem}) =>{
    const [InputValue, setInputValue] = useState(" ")

const sendText = (event) =>{
    event.preventDefault();
    if(!InputValue) return
    addItem(InputValue)
    setInputValue("")
}
    return(
        <div className="addItem">
            <label htmlFor="list"></label>
            <input maxlength ="20" id='list' placeholder="Ingrese una tarea" type='text' value={InputValue} onChange={event =>{
                setInputValue(event.target.value)
            }}/>
            <button className="btn-send"onClick={sendText}>Añadir</button>
        </div>
    )
 }

export default AddItem;