import { Card } from 'react-bootstrap';
export default function Experiencia() {
  return(
    <>
      <Card bg="dark" className="m-2">
        <Card.Body>
          <Card.Title>ZinidTech</Card.Title>
          2019 - Atual<br/>
          Propietário/Programador<br/>
          Criar e desenvolver sistemas para outras empresas.
        </Card.Body>
      </Card>

      <Card bg="dark" className="m-2">
        <Card.Body>
          <Card.Title>Sorveteria Diniz</Card.Title>
          2019 - Atual<br/>
          Proprietário<br/>
          Soveteria da família que reabri em junho de 2019.
        </Card.Body>
      </Card>

      <Card bg="dark" className="m-2">
        <Card.Body>
        <Card.Title>Ipiranga Produtos de Petróleo SA</Card.Title>
          2018 - 2019<br/>
          Estagiário Administrativo<br/>
          Auxiliar e executar rotinas administrativa na venda de
          combustível.
        </Card.Body>
      </Card>
    </>
  )
}