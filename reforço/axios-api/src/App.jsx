import React, { useState, useEffect } from "react";

import api from "./services/api";
import './App.css';

export default function App(){

  // vamos declarar uma variavel de estado com um objeto vazio
  const [ filmes, setFilmes ] = useState([]);

  //useEffect já puxa nosso fetch assim que a pagina for aberta
  useEffect( () => {
    
    async function carregarFilmes() {
      
      try{
        const response = await api.get('star%20wars')
        setFilmes(response.data)
      }
      catch (error){
        console.error('Deu ruim!!!', error)
      }

    }

    carregarFilmes();
  }, [])

  return(
    <div className="app-container">
      <h1>Filmes da TV Maze</h1>
    <div className="filmes-container">
      
      {filmes.map(filme => (
      <div key={filme.show.id} className="filme-card">
              
        {/* vamos pegar a imagem(tamanho médio) do filmes */}
        {filme.show.image &&(
          <img src={filme.show.image.medium} 
              alt={filme.show.name}
              className="filme-image" 
              
          />
        )}
        
        {/* vamos pegar o nome e a url do filme */}
        <div className="filme-info"> 
            <h2>{filme.show.name}</h2>
            <p>{filme.show.url}</p>
        </div>

        </div>
      ))}
      </div>
    </div>
  )

}