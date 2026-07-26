import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex items-center justify-between h-18">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                            <span className="text-black font-bold text-lg">
                                N
                            </span>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-white">
                                NextHire
                            </h1>

                            <p className="text-xs text-gray-400 -mt-1">
                                Find Your Dream Job
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            to="/"
                            className="relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                        >
                            Home
                        </Link>

                        <Link
                            to="/jobs"
                            className="relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                        >
                            Find Jobs
                        </Link>

                        <Link
                            to="/companies"
                            className="relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                        >
                            Companies
                        </Link>

                        <Link
                            to="/resources"
                            className="relative text-gray-300 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                        >
                            Resources
                        </Link>

                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">

                        <Link
                            to="/login"
                            className="px-5 py-2 border border-gray-700 text-white rounded-lg hover:border-white transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-5 py-2 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-all"
                        >
                            Sign Up
                        </Link>

                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-6 border-t border-zinc-800">

                        <div className="flex flex-col gap-5">

                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                to="/jobs"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                Find Jobs
                            </Link>

                            <Link
                                to="/companies"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                Companies
                            </Link>

                            <Link
                                to="/resources"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-white"
                            >
                                Resources
                            </Link>

                            <div className="flex flex-col gap-3 pt-4">

                                <Link
                                    to="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="text-center px-5 py-3 border border-gray-700 text-white rounded-lg"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setIsOpen(false)}
                                    className="text-center px-5 py-3 bg-white text-black font-semibold rounded-lg"
                                >
                                    Sign Up
                                </Link>

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;