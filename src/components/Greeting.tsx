import React, { useState } from "react";

const Greeting: React.FC<{ messages: string[] }> = ({ messages }) => {
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visting</h3>
            <button
                onClick={() => {
                    setGreeting(randomMessage());
                }}
            >
                New Greeting
            </button>
        </div>
    );
};

export default Greeting;
