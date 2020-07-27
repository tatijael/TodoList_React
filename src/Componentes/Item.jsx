import React from "react";
import { RiDeleteBinLine, RiCheckboxCircleLine } from "react-icons/ri";

const Item = ({item, index, completeItem, removeItem }) => {

    return(
        <div className="item" style={{textDecoration: item.isCompleted ? "line-through" : ""}}>
            {item.value}
            <div>
                <button className="btn-item" onClick={() => completeItem(index)}><RiCheckboxCircleLine /></button>
                <button className="btn-item" onClick={()=> removeItem(index)}><RiDeleteBinLine /></button>
            </div>
        </div>
    )
};

export default Item;
