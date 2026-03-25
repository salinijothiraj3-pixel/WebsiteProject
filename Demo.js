import React from "react";
import Baby from "../images/baby.jpg";
function Demo() {
    return(
        <div>
            <h1 className="bg-info text-center text-success p-2 m-4">Salini</h1>
            {/* <h1 style={{color:'red',background:'green',textAlign:'center'}}>Salini Jothiraj</h1> */}
            <img src={Baby} alt="baby"></img>
            <a href="//https:www.whatsapp.com">whatsapp</a>
        </div>
    )
}
export default Demo;