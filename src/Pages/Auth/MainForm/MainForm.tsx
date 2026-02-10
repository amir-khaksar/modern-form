// MainForm.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

import "./MainForm.css";

const iconProps = { size: 18, strokeWidth: 2.2 };

function MainForm(): React.ReactElement {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggle = () => {
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-linear-to-br from-slate-100 to-slate-200 p-4">
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-lg">
                <motion.span
                    animate={{
                        color: !isFlipped ? "#4f46e5" : "#9ca3af",
                        scale: !isFlipped ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-semibold"
                >
                    Login
                </motion.span>

                <motion.button
                    onClick={toggle}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-16 h-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-200"
                >
                    <motion.div
                        animate={{ x: isFlipped ? 32 : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 22,
                        }}
                        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={isFlipped ? "register" : "login"}
                                initial={{
                                    opacity: 0,
                                    rotate: -20,
                                    scale: 0.75,
                                }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 20, scale: 0.75 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center justify-center"
                            >
                                {isFlipped ? (
                                    <UserPlus
                                        {...iconProps}
                                        className="text-purple-600"
                                    />
                                ) : (
                                    <LogIn
                                        {...iconProps}
                                        className="text-indigo-600"
                                    />
                                )}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                </motion.button>

                <motion.span
                    animate={{
                        color: isFlipped ? "#9333ea" : "#9ca3af",
                        scale: isFlipped ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="font-semibold"
                >
                    Register
                </motion.span>
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
