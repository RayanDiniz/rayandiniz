import img from './assets/frame.png';
import './App.css';

import { Collapse } from 'react-collapse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <span className="App-title">Sou Desenvolvedor</span>
        <hr className="App-line"/>

        <Collapse isOpened={false}>
          <p>Desenvolvedor de sistemas e aplicações, freelancer que desenvolve soluções para problemas de outras empresas.</p>
        </Collapse>
      </header>
       <img src={img} className="App-img" alt="logo" />
    </div>
  );  
}

export default App;
