import React from "react";
import Drink from "./Drink";

function DrinkList({name}){

setTimeout(()=>{
    console.log(1)
} ,0)
console.log(2)
new Promise((res)=>{
    console.log(3)
    res()
}).then(()=> console.log(4))

console.log(5)


    return( <div>
        
        <Drink name="tea" />
        <Drink name="coffee" />
      </div> 
      )

}
export default DrinkList