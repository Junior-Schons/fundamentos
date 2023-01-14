import React from "react";

export default (props)=>{
    const max = props.max
    const min = props.min
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return(
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Minimo: </strong> {min} </p>
            <p><strong>Valor Maximo: </strong> {max} </p>
            <p><strong>Valor escolhido: </strong> {aleatorio} </p>
        </div>
    )
}