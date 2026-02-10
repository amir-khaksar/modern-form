import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./MainForm.css";
import AuthToggle from "../../../components/authToggle";

function MainForm(): React.ReactElement {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggle = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-linear-to-br from-slate-100 to-slate-200 p-4">
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-lg">
                <AuthToggle toggle={toggle} isFlipped={isFlipped} />
            </div>

            <div className="perspective-1000 w-full max-w-175 h-175">
                <div
                    className={`relative w-full h-full transform-style-3d transition-transform duration-700 ease-in-out ${
                        isFlipped ? "rotate-y-180" : ""
                    }`}
                >
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                        <LoginForm />
                    </div>
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainForm;
