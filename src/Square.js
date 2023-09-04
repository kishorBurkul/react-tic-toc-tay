import React, { useState } from "react";
import './Style.css'

function Square({value , onSquareClick}){

// const [value ,  setValue ] = useState(null)

//     function handleClick(){
//          setValue("x");
        
//       }

    return(<>
    {/* <button className="square" onClick={handleClick}>{value}</button> */}
    <button className="square" onClick={onSquareClick}>{value}</button>
    </>)
}
export default Square;