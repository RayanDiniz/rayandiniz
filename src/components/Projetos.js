import { Card } from 'react-bootstrap';
export default function Projetos() {
  return(
    <>
      <Card bg="dark" className="m-2">
        <Card.Body>
          <Card.Title>Adote um Pet</Card.Title>
          Criei esse projeto para por em prática minhas
          habilidades em produzir aplicações web e mobile com
          ReactJs e ReactNative.
          O projeto visa conectar pessoas com interesse em
          adotar ou doar um pet em região próxima.
        </Card.Body>
      </Card>
    </>
  )
}