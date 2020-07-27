import React from "react";

const Button = ({complete, todos, incompleto}) => {
    return(
        <div>
        <button onClick={todos} className="btn-filter">Todas</button>
        <button  onClick={complete} className="btn-filter">Completas</button>
        <button onClick={incompleto} className="btn-filter">Incompletas</button>
        </div>
    )
}

export default Button