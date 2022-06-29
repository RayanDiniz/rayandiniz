import * as React from "react";
const Sobre = () => {
  return (
    <div className="AppSobre container">
      <p className="m-3">
        Analista e desenvolvedor de sistemas especializado em
        Segurança da Informação. Atualmente possuo uma startup que
        constrói aplicações e sistemas para outras empresas, também
        sou proprietário de uma sorveteria da família naqual se
        encontrava desativada. Procuro novos desafios na carreira de
        tecnologia.
      </p><h4>Seja bem-vindo!</h4>
        <p>Olá! Eu sou o
          Rayan Cassio Vieira Diniz, e quero que você seja muito bem-vindo a minha homepage. Aqui em baixo você encotra meus contatos e nas abas ao lado tem mais informações, fique a vontade.</p>

        <span>Analista e Desenvolvedor de Sistemas</span>
        <div className="Stack">
          <div className="primary">PHP</div>
          <div className="warning">JavaScript</div>
          <div className="success">Python</div>
          <div className="danger">HTML</div>
          <div className="info">CSS</div>
        </div>
    </div>
  );
}
export default Sobre;