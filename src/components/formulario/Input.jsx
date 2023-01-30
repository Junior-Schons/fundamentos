import React, {useState} from "react";
import "./input.css"

export default props=>{
    const [valor, setValor] = useState('inicial')

    function quandoMudar (e){
        setValor(e.target.value)
    }
    return(
        <div className="input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
            <input value={undefined} type="text" />
        </div>
    )
}