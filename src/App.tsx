import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import goose from "./images/goose_meme.webp";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>My Silly Thoughts</h1>
            <p>Presented by: Victoria Nikolaeva</p>

            <div className="App-Table">
                <Container>
                    <Row>
                        <div className="Table-Col1">
                            <Col>
                                <ul className="App-List">
                                    <li>
                                        Silly Silly Goose: Reminder to drink
                                        your water!
                                    </li>
                                    <li>
                                        Silly Silly Thought: Is the Matrix a
                                        Plato Cave Analogy???
                                    </li>
                                    <li>Silly Silly Code: Hello World</li>
                                </ul>
                            </Col>
                        </div>

                        <div className="Table-Col2">
                            <Col>
                                <img
                                    src={goose}
                                    alt="Goose Pic"
                                    id="goose-pic"
                                />
                                <p style={{ color: "whitesmoke" }}>
                                    Beter hurry up and drink it ALL!!!!
                                </p>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>

            <br></br>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}
export default App;
