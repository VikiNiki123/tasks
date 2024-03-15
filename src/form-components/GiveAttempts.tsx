import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [gain, setGain] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGain(event.target.value);
    };

    const useAttempt = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const gainAttempts = () => {
        const parsedAttempts = parseInt(gain, 10);
        if (!isNaN(parsedAttempts)) {
            setAttempts(attempts + parsedAttempts);
            setGain("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <input type="number" value={gain} onChange={handleChange} />
            <Button
                onClick={useAttempt}
                disabled={attempts === 0}
                style={{ marginRight: "3px", marginLeft: "5px" }}
            >
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
