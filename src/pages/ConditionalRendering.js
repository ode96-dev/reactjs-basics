import React from "react";

function ConditionalRendering() {
    const time = new Date();
    const day = time.toLocaleString("en-us", { weekday: "long" });
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    let dayMessage;

    day.toLowerCase() === "monday"
        ? (dayMessage = `happy ${day}`)
        : day.toLowerCase() === "tuesday"
            ? (dayMessage = `happy ${day}, four days to go!`)
            : day.toLowerCase() === "wednesday"
                ? (dayMessage = `happy ${day}, three days to go!`)
                : day.toLowerCase() === "thursday"
                    ? (dayMessage = `happy ${day}, two days to go!`)
                    : day.toLowerCase() === "friday"
                        ? (dayMessage = `happy ${day}, one days to go!`)
                        : (dayMessage = `happy ${day}, have fun!`);

    return <div>
        <h1>{dayMessage}</h1>
        {morning ? <h2>have you had breakfast yet?</h2> : ''}
    </div>;
}

export default ConditionalRendering;
