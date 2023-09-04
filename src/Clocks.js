import React from "react";

function Clocks({time,color}) {

    return(<>
    <h1 style={{color:color}}>
     Real Time :{time}
    </h1>
    </>)
}

export default Clocks