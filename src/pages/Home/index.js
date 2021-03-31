import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

import "./Styles.css";
import hom from "../../assets/home-illustration.jpg";

function Home() {
    return (
        <Container>
            <Row>
                <Col className="linkhome">
                    <Link to="/login" className="btnLink">
                        login
                        <FaArrowRight />
                    </Link>
                </Col>
            </Row>
            <Row className="rowExpande">
                <Col md={6} >
                    <p>Desenvolvendo sistemas que melhoram seu negócio!
                    Faça seu cadastro e solicite um orçamento cliquando no botão abaixo:</p>
                    <Link to="/cadastro">
                        <Button variant="danger" size="lg">
                            Cadastrar
                        </Button>
                    </Link>
                </Col>

                <Col md={6}>
                    <Image src={hom} fluid />
                </Col>
            </Row>

            <Row>
                <Col className="rdiniz">&copy;RayanDiniz</Col>
            </Row>

        </Container>
    );
}

export default Home;