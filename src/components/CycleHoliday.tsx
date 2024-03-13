import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holiday = "😈,🎄,🐇,🎃,🥚";
    const [currentHoliday, setCurrentHoliday] = useState<string>("🎃");

    function alphabetical(): void {
        const list = holiday.split(",");
        const index = list.indexOf(currentHoliday);
        if (index === list.length - 1) {
            setCurrentHoliday(list[0]);
        } else {
            setCurrentHoliday(list[index + 1]);
        }
    }

    function date(): void {
        if (currentHoliday === "🥚") {
            setCurrentHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setCurrentHoliday("🎄");
        } else if (currentHoliday === "🎄") {
            setCurrentHoliday("😈");
        } else if (currentHoliday === "😈") {
            setCurrentHoliday("🐇");
        } else if (currentHoliday === "🐇") {
            setCurrentHoliday("🥚");
        }
    }

    return (
        <div>
            <Button
                onClick={() => {
                    console.log(currentHoliday);
                    alphabetical();
                    console.log("New Holiday: ", currentHoliday);
                }}
            >
                Change by Alphabet:
            </Button>
            <br></br>
            <br></br>
            <Button
                onClick={() => {
                    console.log(currentHoliday);
                    date();
                    console.log("New Holiday: ", currentHoliday);
                }}
            >
                Change by Year:
            </Button>
            <br></br>
            Holiday: {currentHoliday}
        </div>
    );
}
