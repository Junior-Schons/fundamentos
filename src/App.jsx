import './App.css'

import React from "react";

import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import UsuarioInfo from './components/Condicional/UsuarioInfo';
import ParOuImpar from './components/Condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/primeiro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import DiretaPai from './components/comunicacao/DiretaPai';
import Contador from './components/contador/Contador';

export default () => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo='#12 - Contador ' color='#abD498' >
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo='#11 - Comp. control input' color='#784745' >
                    <Input></Input>
                </Card>
                <Card titulo='#10 -Com. Indireta ' color='#D5DB8B' >
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo='#09 - Comun. Direta' color='#004147' >
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo='#08 - Render.Condicional' color='#51074a' >
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Junior' }} />
                </Card>
                <Card titulo='#07 - Desafio Repetiçao' color='#FF5C35' >
                    <TabelaProdutos />
                </Card>
                <Card titulo='#06 - Repetiçao' color='#FF4C65' >
                    <ListaAlunos />
                </Card>
                <Card titulo='#05 - Componentes Filhos' color='#fed766' >
                    <Familia sobrenome='Ferreira'>
                        <FamiliaMembro nome='Pedro' />
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