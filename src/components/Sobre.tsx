import * as React from "react";
const Sobre = () => {
  return (
    <div className="AppSobre container">
      <h1>Um pouco sobre mim</h1>
      <p>
        Eu sou o
        Rayan Cassio Vieira Diniz, e quero que você seja muito bem-vindo 
        a minha homepage. Aqui você encotra meus contatos, minha formação, meu potifolio, minhas experiencias e mais informações. Fique a vontade!
      </p>
      <p>
        Sou analista e desenvolvedor de sistemas especializado em
        Segurança da Informação. Atualmente possuo uma startup que
        constrói aplicações e sistemas para outras empresas, também
        sou proprietário de uma sorveteria da família naqual se
        encontrava desativada. Procuro novos desafios na carreira de
        tecnologia.
      </p>
      <h2>Stack</h2>
      <div className="stacks">
        <div className="pill primary">PHP</div>
        <div className="pill warning">JavaScript</div>
        <div className="pill success">Python</div>
        <div className="pill danger">HTML</div>
        <div className="pill info">CSS</div>
      </div>
    </div>
  );
}
export default Sobre;