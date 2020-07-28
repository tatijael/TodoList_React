import React, {useState} from "react";
import { RiDeleteBinLine, RiCheckboxCircleLine, RiPencilLine } from "react-icons/ri";


const Item = ({item, index, completeItem, removeItem, changeText }) => {
    const[edit, setEdit] = useState(true)
    return(
        <div className="item" style={{textDecoration: item.isCompleted ? "line-through" : "none"}}>
            <input className="item-todo"value={item.value} disabled={edit} onChange={event => changeText(event,index)} />
            <div>
                <button className="btn-item" onClick={() => completeItem(index)}><RiCheckboxCircleLine /></button>
                <button className="btn-item" onClick={()=> removeItem(index)}><RiDeleteBinLine /></button>
                <button className="btn-item" onClick={()=> setEdit(!edit)}><RiPencilLine /></button>
            </div>
        </div>
    )
};

export default Item;
