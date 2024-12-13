import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle closing the dropdown
    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="fix-container mx-auto px-4 flex justify-between items-center h-20 lg:justify-evenly">
                {/* Logo and Title */}
                <div className="flex flex-row items-center lg:items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 lg:w-14 lg:h-14 mr-4"
                    />
                    <div className="font-bold text-[#4caf50] lg:order-none order-1 w-full lg:w-auto text-start lg:text-left text-2xl sm:text-xl lg:text-xl xl:text-2xl">
                        TEN SPACE RESEARCH
                    </div>
                </div>

                {/* Laptop View */}
                <ul className="hidden lg:flex lg:space-x-8 items-center text-lg text-gray-500">
                    <li>
                        <a
                            href="/"
                            className="hover:text-[#4caf50] transition text-[clamp(0.75rem, 1vw, 1.25rem)] ml-4"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="hover:text-[#4caf50] transition text-[clamp(0.75rem, 1vw, 1.25rem)]"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/technology"
                            className="hover:text-[#4caf50] transition text-[clamp(0.75rem, 1vw, 1.25rem)]"
                        >
                            Technology
                        </a>
                    </li>
                    <li>
                        <a
                            href="/careers"
                            className="hover:text-[#4caf50] transition text-[clamp(0.75rem, 1vw, 1.25rem)]"
                        >
                            Careers
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="hover:text-[#4caf50] transition text-[clamp(0.75rem, 1vw, 1.25rem)] mr-4"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Laptop View Buttons */}
                <div className="hidden lg:flex space-x-2">
                    <Link to="/shop">
                        <button className="mr-4 border-2 border-[#3e8e41] text-[#3e8e41] px-2 py-1 rounded-md hover:bg-[#3e8e41] hover:text-white transition text-sm lg:text-sm xl:text-lg">
                            Shop Now
                        </button>
                    </Link>
                    <Link to="/book-launch">
                        <button className="bg-[#3e8e41] border-[#3e8e41] text-white px-4 py-1 rounded-md border-2 hover:text-[#3e8e41] hover:bg-white hover:border-[#3e8e41] transition text-sm lg:text-sm xl:text-lg">
                            Book a Launch
                        </button>
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div className="lg:hidden order-2 m-0">
                    <button
                        className="flex items-center text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
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
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            />
                        </svg>
                    </button>

                    {/* Mobile View */}
                    <ul
                        className={`${isOpen ? "block" : "hidden"
                            } absolute right-0 mt-6 w-full bg-white border shadow-lg text-black p-4 border-t-6 z-10`}
                    >
                        <li onClick={closeDropdown}>
                            <a href="/" className="block px-4 py-2 hover:bg-[#4caf50]">
                                Home
                            </a>
                        </li>
                        <li onClick={closeDropdown}>
                            <a href="/about" className="block px-4 py-2 hover:bg-[#4caf50]">
                                About
                            </a>
                        </li>
                        <li onClick={closeDropdown}>
                            <a
                                href="/technology"
                                className="block px-4 py-2 hover:bg-[#4caf50]"
                            >
                                Technology
                            </a>
                        </li>
                        <li onClick={closeDropdown}>
                            <a href="/careers" className="block px-4 py-2 hover:bg-[#4caf50]">
                                Careers
                            </a>
                        </li>
                        <li onClick={closeDropdown}>
                            <a href="/contact" className="block px-4 py-2 hover:bg-[#4caf50]">
                                Contact
                            </a>
                        </li>
                        <div className="px-2 py-2 border-t flex flex-row">
                            <Link to="/shop">
                                <button
                                    className="border-2 border-[#4caf50] text-[#4caf50] px-2 py-2 rounded-md hover:bg-[#4caf50] hover:text-white transition text-md mr-4 mt-3"
                                    onClick={closeDropdown}
                                >
                                    Shop Now
                                </button>
                            </Link>
                            <Link to="/book-launch">
                                <button
                                    className="bg-[#4caf50] text-white px-3 py-2 rounded-md border-2 hover:text-[#4caf50] hover:bg-white hover:border-[#4caf50] transition text-md mt-3"
                                    onClick={closeDropdown}
                                >
                                    Book a Launch
                                </button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
