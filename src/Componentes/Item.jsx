import React from "react";
// import { RiDeleteBinLine } from "react-icons/ri";

const Item = ({item, index, completeItem, removeItem }) => {
    return(
        <div>
            {item.value}
            <button onClick={() => completeItem(index)}>Complete</button>
            <button onClick={()=> removeItem(index)}>X</button>
        </div>
    )
};

export default Item;
