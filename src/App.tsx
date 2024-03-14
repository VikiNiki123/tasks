import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import goose from "./images/goose_meme.webp";

import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { ChangeType } from "./components/ChangeType";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

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
            ========
            <div>
                <hr></hr>
                <h3>↓ Task 10 Content ↓</h3>
                <br></br>
                <CheckAnswer expectedAnswer="42"></CheckAnswer>
                <hr></hr>
                <GiveAttempts></GiveAttempts>
                <hr></hr>
                <EditMode></EditMode>
                <hr></hr>
                <ChangeColor></ChangeColor>
                <hr></hr>
                <MultipleChoiceQuestion
                    options={["a", "b", "c"]}
                    expectedAnswer="b"
                ></MultipleChoiceQuestion>
                <hr></hr>
                <hr></hr>
                <h3>↓ Task 9 Content ↓</h3>
                <br></br>
                {<DoubleHalf></DoubleHalf>}
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <h3>↓ Task 8 Content ↓</h3>
                <br></br>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
            ========
            <br></br>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br></br>
            <br></br>
        </div>
    );
}
export default App;
