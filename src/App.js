import { Container, Row, Col, Image, Badge, Tabs, Tab } from 'react-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import './App.css';
import img from './assets/frame.png';
import Sobre from './components/Sobre';
import Home from './components/Home';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Projetos from './components/Projetos';

function App() {
  return(
    <Container>
      <Row className="App">
        <Col>
          <header className="App-header">
            <h1>Rayan Cassio Vieira Diniz</h1>
            <spam>Analista e Desenvolvedor de Sistemas</spam>
            <div className="border-bottom pb-3">
              <Badge pill bg="primary">
                PHP
              </Badge>{' '}
              <Badge pill bg="warning" text="dark">
                JavaScript
              </Badge>{' '}
              <Badge pill bg="success">
                Python
              </Badge>{' '}
              <Badge pill bg="danger">
                HTML
              </Badge>{' '}
              <Badge pill bg="info">
                CSS
              </Badge>
            </div>

            <Tabs
              defaultAtiveKey="home"
              transition={true}
              id="menu-tabs"
            >
              <Tab eventKey="home" title={<AiFillHome />}>
                <Home />
              </Tab>
              <Tab eventKey="sobre" title="Sobre">
                <Sobre />
              </Tab>
              <Tab eventKey="experiencia" title="Experiência">
                <Experiencia />
              </Tab>
              <Tab eventKey="educacao" title="Educação">
                <Educacao />
              </Tab>
              <Tab eventKey="projetos" title="Projetos">
                <Projetos />
              </Tab>
            </Tabs>
          </header>
        </Col>
        <Col>
          <Image src={img} fluid alt="logo" />
        </Col>
      </Row>
    </Container>
  )
}
export default App;
