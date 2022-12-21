import * as React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Contatos = () => {
  return (
    <div className="AppContatos container">
      <div className="list-group">
        <div className="boxContact">
          <a rel="noreferrer noopener" className="App-link" target="_blank" href="mailto:rayancassiokiol@gmail.com">
            <img src="./src/assets/gmail.png" alt="E-mail" />
            <MdEmail /> rayancassiokiol@gmail.com
          </a>
        </div>
        <div className="boxContact">
          <a rel="noreferrer noopener" className="App-link" href="tel:+5598988922002">
            <BsFillTelephoneFill /> +55 98 98892-2002
          </a>
        </div>
        <div className="boxContact">
          <a rel="noreferrer noopener" className="App-link" target="_blank" href="https://linkedin.com/in/rayan-cassio-vieira-diniz-16671b145">
            <BsLinkedin /> Rayan Cassio
          </a>
        </div>
        <div className="boxContact">
          <a rel="noreferrer noopener" className="App-link" target="_blank" href="https://facebook.com/rayan.cassio">
            <BsFacebook /> Rayan Cassio
          </a>
        </div>
        <div className="boxContact">
          <a rel="noreferrer noopener" className="App-link" target="_blank" href="https://twitter.com/RayanCassio">
            <BsTwitter /> @RayanCassio
          </a>
        </div>
      </div>
    </div >
  )
}
export default Contatos;