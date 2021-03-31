import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge } from 'react-bootstrap';
import App from "./App";
ReactDOM.render(
    <React.StrictMode>
        <Container>
            <h1>
                <Badge variant="danger">Z</Badge>
                inid
            </h1>
        </Container>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);