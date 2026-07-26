import React from "react";
import { Link } from "react-router-dom";
import {
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";;

const Footer = () => {
    return (
        <footer className="bg-black border-t border-zinc-800">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10">

            
                    <div className="lg:col-span-1">

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                                <span className="text-black font-bold text-xl">
                                    N
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold text-white">
                                NextHire
                            </h2>
                        </div>

                        <p className="text-gray-400 mt-4">
                            Find your dream job and connect with top recruiters.
                        </p>

                        <h3 className="text-white font-medium mt-8 mb-4">
                            Connect with us
                        </h3>

                        <div className="flex gap-4 text-white">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-white hover:scale-110 transition-all"
                            >
                                <FaXTwitter size={18} />
                            </a>

                        </div>
                    </div>

                 
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Job Seekers
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/jobs" className="hover:text-white transition">Browse Jobs</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Saved Jobs</Link></li>
                            <li><Link to="/" className="hover:text-white transition">My Applications</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Profile</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Recruiters
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Post Job</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Dashboard</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Manage Jobs</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Candidates</Link></li>
                        </ul>
                    </div>

                
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Help Center</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link to="/" className="hover:text-white transition">FAQ</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Report Issue</Link></li>
                        </ul>
                    </div>

                
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Terms of Service</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Cookies Policy</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Security</Link></li>
                        </ul>
                    </div>

                </div>

             
                <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 NextHire. All Rights Reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Connecting talent with opportunity.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;