import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Adding One</Button>
            <br></br>
            equals to: {value}
        </span>
    );
}
