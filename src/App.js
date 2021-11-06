import img from './assets/frame.png';
import './App.css';

import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <span className="App-title">Rayan Cassio Vieira Diniz</span>
        <hr className="App-line"/>
        <ul className="App-link">
          <li><Sobre /></li>
          <li><Sobre /></li>
        </ul>
      </header>
       <img src={img} className="App-img" alt="logo" />
    </div>
  )
}

export default App;
