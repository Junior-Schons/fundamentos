import './App.css'

import React from "react";

import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/primeiro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo='#05 - Componentes Filhos' color='#fed766' >
                    <Familia sobrenome='Ferreira'>
                        <FamiliaMembro nome='Pedro'/>
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='Gustavo' />
                    </Familia>
                </Card>

                <Card titulo='#04 - Desafio Aleatório' color="#00ff4d">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#8f83d8'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Parametro' color='#8b9dc3'>
                    <ComParametro
                        titulo='situação do aluno'
                        aluno='Pedro'
                        nota={9.3}
                    />
                </Card>

                <Card titulo='#01 - Primeiro Componente' color='#00e4ff'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}