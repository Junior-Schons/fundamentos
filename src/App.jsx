import React from "react";

import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/primeiro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Card titulo='Desafio Aleatório'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo='Fragmento'>
                <Fragmento />
            </Card>

            <Card titulo='Com Parametro'>
                <ComParametro
                    titulo='situação do aluno'
                    aluno='Pedro'
                    nota={9.3}
                />
            </Card>

            <Card titulo='Primeiro Componente'>
                <Primeiro />
            </Card>
        </div>
    );
}