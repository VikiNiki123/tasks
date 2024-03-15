import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const checkAnswer = () => {
        return userAnswer.toLowerCase() === expectedAnswer.toLowerCase()
            ? "✔️"
            : "❌";
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={change}
                style={{
                    width: 100,
                    marginLeft: "42%",
                    marginRight: "42%",
                    marginTop: 7,
                    marginBottom: 5
                }}
            />
            <br></br>
            <p>{checkAnswer()}</p>
        </div>
    );
}
