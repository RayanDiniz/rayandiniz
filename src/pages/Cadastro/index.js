import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
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
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Usuario"/>
          <input type="email" placeholder="Login"/>
          <input type="password" placeholder="Senha"/>

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