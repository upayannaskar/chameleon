"use client"
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-green-500 via-blue-500 to-red-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold font-serif">Chameleon</div>

                {/* Hamburger menu button for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:flex space-x-6 md:space-x-8 items-center`}
                >
                    <a href="#" className="text-white hover:text-green-200 transition-colors duration-200">
                        Home
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                        Tools
                    </a>
                    <a href="#" className="text-white hover:text-purple-200 transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="text-white hover:text-pink-200 transition-colors duration-200">
                        Contact
                    </a>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div
                    className={`absolute top-0 left-0 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 md:hidden flex flex-col items-start p-4 space-y-2 w-full h-auto z-50 transition-all duration-300 transform ${isOpen ? 'animate-slideDown' : 'animate-slideUp'
                        }`}
                >
                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)} className="self-end text-white mb-4 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>

                    {/* Menu Items */}
                    <a href="#" className="text-white text-lg hover:bg-blue-700 px-3 py-2 rounded w-full">
                        Home
                    </a>
                    <a href="#" className="text-white text-lg hover:bg-blue-700 px-3 py-2 rounded w-full">
                        Tools
                    </a>
                    <a href="#" className="text-white text-lg hover:bg-blue-700 px-3 py-2 rounded w-full">
                        About
                    </a>
                    <a href="#" className="text-white text-lg hover:bg-blue-700 px-3 py-2 rounded w-full">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}