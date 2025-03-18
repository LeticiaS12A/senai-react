import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export function HelloWord(){
    return ( <div>
    <h1>Saudação personalizada</h1>
  <input type="text" id="nomeSaudacao" placeholder="Digite seu nome"/>
  <button id="botaoSaudar" placeholder="Saudar"/>
  <p id="saudacaoOutput"/>
  </div>
  );
}

const textoSaudacao = document.getElementById('nomeSaudacao')
const btnSaudar = document.getElementById('botaoSaudar')
const pSaudacao = document.getElementById('saudacaoOutput')

// Vamos implementar a arrow function criarSaudacao
const criarSaudacao = (nome) => `Olá, ${nome}! Bem-vindo(a)!`

btnSaudar.addEventListener('click', () => {
    const nome = textoSaudacao.value
    const saudacao = criarSaudacao(nome)
    pSaudacao.textContent = saudacao
})

export default HelloWord;
