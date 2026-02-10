import React, { useState } from "react";

function MainForm(): React.ReactElement {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggle = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <button onClick={toggle}>{isFlipped ? "Login" : "Register"}</button>

            <div></div>
        </div>
    );
}

export default MainForm;
