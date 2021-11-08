import { BsFacebook, BsTwitter, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
export default function Home() {
  return(
    <div className="m-3">
      <h4>Seja bem-vindo!</h4>
      <p>Olá! Eu sou o Rayan Diniz, e quero que você seja muito bem-vindo a minha homepage. Aqui em baixo você encotra meus contatos e nas abas ao lado tem mais informações, fique a vontade.</p>
      <div className="list-group">
        <a className="App-link" target="_blank" href="mailto:rayancassiokiol@gmail.com">
          <MdEmail /> rayancassiokiol@gmail.com
        </a>
        <a className="App-link" href="tel:+5598988922002">
          <BsFillTelephoneFill /> +55 98 98892-2002
        </a>
        <a className="App-link" target="_blank" href="https://linkedin.com/in/rayan-cassio-vieira-diniz-16671b145">
         <BsLinkedin /> Rayan Cassio
        </a>
        <a className="App-link" target="_blank" href="https://facebook.com/rayan.cassio">
          <BsFacebook /> Rayan Cassio
        </a>
        <a className="App-link" target="_blank" href="https://twitter.com/RayanCassio">
          <BsTwitter /> @RayanCassio
        </a>
      </div>    
    </div>
  )
}
