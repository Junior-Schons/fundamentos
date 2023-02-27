import React, { useState } from "react";


export default (props)=>{
    function gerarNumerosAleatorios(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ? gerarNumerosAleatorios (min, max, array) : aleatorio;
    }
    
    function gerarNumeros(qtd){
        const numeros = Array(qtd)
        .fill(0)
        .reduce((nums)=>{
            const novoNumero = gerarNumerosAleatorios(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2)=> n1 - n2)
    
        return numeros;
    
    }
        
        const [qtd, setQtd] = useState(props.qtd || 6);
        const numerosIniciais = Array(qtd).fill(0);
        const [numeros, setNumeros] = useState(numerosIniciais)   

        return(
            <div>
                <h2>Mega</h2>
                <h3>{numeros.join(' ')}</h3>
                <div>
                    <label>Quantidade de numeros</label>
                    <input type="number" value={qtd}
                    onChange={e =>setQtd(+e.target.value)}/>
                </div>
                <button onClick={_=> setNumeros(gerarNumeros(qtd))}>Gerar Numeros</button>
            </div>
        )
    }
