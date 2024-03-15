import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="dropdownMultipleChoice">
                    <Form.Label>What is the answer?</Form.Label>
                    <Form.Select
                        value={answer}
                        onChange={updateAnswer}
                        style={{
                            width: 250,
                            marginLeft: "42%",
                            marginTop: 5,
                            marginBottom: 5,
                            paddingTop: 25
                        }}
                    >
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {(answer === expectedAnswer && "✔️") || "❌"}.
            </div>
        </div>
    );
}
