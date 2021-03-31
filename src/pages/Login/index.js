import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { Transition } from "react-transition-group";

import "./Styles.css";
import Logi from "../../assets/login-illustration.jpg";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};
const Login = ({ in: inProp }) => (

  <Transition in={inProp} timeout={duration}>
    {state => (
      <Container style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <Row>
          <Col className="linklogin">
            <Link to="/" className="btnLink">
              <FaArrowLeft />
            voltar
          </Link>
          </Col>
        </Row>

        <Row className="formCenter">
          <Form className="form">
            <Image src={Logi} fluid rounded alt="login" />
            <input type="email" placeholder="Login" />
            <input type="password" placeholder="Senha" />

            <Form.Row className="formCenter">
              <Button type="submit" variant="danger" size="lg">Entrar</Button>
            </Form.Row>

            <Link to="/cadastro" className="btnLink">Cadastre-se</Link>
          </Form>
        </Row>

        <Row>
          <Col className="rdiniz">&copy;RayanDiniz</Col>
        </Row>

      </Container>
    )}
  </Transition>
);

export default Login;