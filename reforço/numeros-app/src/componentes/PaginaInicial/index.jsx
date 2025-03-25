import react, { useState } from "react";
import './PaginaInicial.css'

export default function PaginaInicial(){
    
    const [ numero, setNumero ] = useState(0);
    
    function gerarNumero(){
        const novoNumero = Math.floor(Math.random() * 100)

        setNumero(novoNumero)
    };

    return(
        <div className="conteudo-centralizado">
            <h3>Número aletório:</h3>
            <h1>{ numero }</h1>

            <div className="area-botao">
                <label>
                    Click no botão a abaixo para gerar um número aletório
                </label>

                <button onClick={gerarNumero}>
                    Gerar Número
                </button>
            </div>
        
        </div>

    );
}