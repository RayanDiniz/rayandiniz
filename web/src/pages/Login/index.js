import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";

import Logo from '../../components/Logo';
import api from '../../services/api';
import "./Styles.css";
import Logi from "../../assets/login-illustration.jpg";

function Login() {
  const [email] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
      e.preventDefault();
      
      try {
          const response = await api.post('sessions', { email });

          localStorage.setItem('userEmail', email);
          localStorage.setItem('userName', response.data.name);

          history.push('/profile');
      } catch (err) {
          alert('Falha no login, tente novamente');
      }
  }

  return (
    <Container>
      <Row>
        <Logo />
        <Col className="linklogin">
          <Link to="/" className="btnLink">
            <FaArrowLeft />
        voltar
      </Link>
        </Col>
      </Row>

      <Row className="formCenter">
        <Form onSubmit={handleLogin} className="form">
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
  );
}

export default Login;