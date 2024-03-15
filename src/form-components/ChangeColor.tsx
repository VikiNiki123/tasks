import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [colorPicked, setColor] = useState("red");

    const colors = [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
        { label: "Yellow", value: "yellow" },
        { label: "Pink", value: "pink" },
        { label: "Orange", value: "orange" },
        { label: "Purple", value: "purple" },
        { label: "Brown", value: "brown" }
    ];

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <div key={color.value}>
                        <input
                            type="radio"
                            name="color"
                            value={color.value}
                            checked={colorPicked === color.value}
                            onChange={change}
                        />
                        <label htmlFor={color.value}>{color.label}</label>
                    </div>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    color: colorPicked,
                    backgroundColor: colorPicked,
                    width: 500,
                    marginLeft: "35%",
                    marginTop: 5,
                    paddingTop: 25
                }}
            >
                {colorPicked}
            </div>
        </div>
    );
}
