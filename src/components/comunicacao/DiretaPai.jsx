import React from "react";
import DiretaFilho from "./DiretaFilho";


export default props=>{
    return(
        <div>
            <DiretaFilho nome='Pedro' numero={20} bool={true}/>
            <DiretaFilho nome='Junior' numero={28} bool={false}/>
        </div>
    )
}