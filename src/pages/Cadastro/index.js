import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, FormText } from 'react-bootstrap';
import { FaArrowLeft, FaHome } from "react-icons/fa";

import "./Styles.css";

function Cadastro() {
  return (
    <Container>
      <Row>
        <Col className="linklogin">
          <Link to="/" className="btnLink">
            <FaArrowLeft />
            <FaHome />
          </Link>
        </Col>
      </Row>

      <Row className="formCenter">
        <Form className="form">
          <Form.Label>Cadastre-se e descreva sua aplicação:</Form.Label>
          <FormText>Em seguida marcaremos uma reunião para discutir orçamento equestões contratuais.</FormText>
          <input type="text" placeholder="Nome Completo"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
          <input type="tel" placeholder="Whatsapp"/>
          <textarea placeholder="Descreva sua aplicação aqui..."></textarea>

          <Button type="submit" variant="danger" size="lg">Cadastrar</Button>
        </Form>
      </Row>
      
      <Row>
          <Col className="rdiniz">&copy;RayanDiniz</Col>
      </Row>
    </Container>
  );
}

export default Cadastro;