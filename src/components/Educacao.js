import { Card } from 'react-bootstrap';
export default function Educacao() {
  return(
    <>
      <Card bg="dark" className="m-2">
        <Card.Body>
          <Card.Title>Descomplica</Card.Title>
          2020 - 2021<br/>
          MBA Segurança da Informação - Pós-graduação<br/>
          Completo
        </Card.Body>
      </Card>
      
      <Card bg="dark" className="m-2">
        <Card.Body>
          <Card.Title>Universidade Estácio de Sá</Card.Title>
          2017 - 2019<br/>
          Análise e Desenvolvimento de Sistemas - Graduação<br/>
          Completo
        </Card.Body>
      </Card>
    </>
  )
}