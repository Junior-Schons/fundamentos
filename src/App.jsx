import React from "react";

import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/primeiro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default (props)=>{
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Aleatorio min={1} max={60}/>
            <Fragmento />
            <ComParametro
                titulo='situação do aluno'
                aluno='Pedro'
                nota={9.3}
            />
            <Primeiro />
        </div>
    );
}