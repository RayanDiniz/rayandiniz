import * as React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './App.css';
import img from './assets/perfil.png';
import Sobre from './components/Sobre';
import Home from './components/Home';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Projetos from './components/Projetos';
import Contatos from "./components/Contactos";
const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <header className="AppHeader">
          <div className="AppHeaderTitle">
            <div className="AppPerfilImg">
              <img src={img} alt="I'm a developer!" />
            </div>
            <h1>Rayan Diniz</h1>
          </div>
          <div className="AppHeaderBody">
            <ul className="menu">
              <li><a rel="noreferrer noopener" href="#home">Home</a></li>
              <li><a rel="noreferrer noopener" href="#sobre">Sobre</a></li>
              <li><a rel="noreferrer noopener" href="#experiencia">Experiência</a></li>
              <li><a rel="noreferrer noopener" href="#educacao">Educação</a></li>
              <li><a rel="noreferrer noopener" href="#projetos">Projetos</a></li>
              <li><a rel="noreferrer noopener" href="#contatos">Contatos</a></li>
            </ul>
          </div>
          <div className="AppHeaderFooter">
            <div className="social-midia">
              <a rel="noreferrer noopener" href="https://github.com/rayandiniz" target="_blank"><FaGithub /></a>
              <a rel="noreferrer noopener" href="https://twitter.com/RayanCassio" target="_blank"><FaTwitter /></a>
              <a rel="noreferrer noopener" href="https://www.linkedin.com/in/rayan-cassio-vieira-diniz-16671b145/" target="_blank"><FaLinkedinIn /></a>
            </div>
          </div>
        </header>

        <div className="AppContainer">
          <div id="home">
            <Home />
          </div>
          <div id="sobre">
            <Sobre />
          </div>
          <div id="experiencia">
            <Experiencia />
          </div>
          <div id="educacao">
            <Educacao />
          </div>
          <div id="projetos">
            <Projetos />
          </div>
          <div id="contatos">
            <Contatos />
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
