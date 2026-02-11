import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./MainForm.css";
import AuthToggle from "../../../components/AuthToggle";

function MainForm(): React.ReactElement {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggle = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-2">
            <div className="w-full max-w-md">
                <div className="w-full mb-4">
                    <div className="bg-white px-6 py-4 rounded-2xl shadow-lg">
                        <AuthToggle toggle={toggle} isFlipped={isFlipped} />
                    </div>
                </div>

                <div className="perspective-1000 w-full h-125">
                    <div
                        className={`relative transform-style-3d transition-transform duration-700 ${
                            isFlipped ? "rotate-y-180" : ""
                        }`}
                    >
                        <div className="absolute inset-0 h-fit">
                            <LoginForm />
                        </div>
                        <div className="absolute inset-0 backface-hidden rotate-y-180 h-fit">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainForm;
