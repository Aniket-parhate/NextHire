import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [role, setRole] = useState("jobseeker");

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">

            <div className="w-full max-w-md">

             
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Join NextHire and start your journey.
                    </p>
                </div>

                <div className="bg-zinc-900 p-1 rounded-2xl flex mb-8 border border-zinc-800">

                    <button
                        onClick={() => setRole("jobseeker")}
                        className={`flex-1 py-3 rounded-xl font-medium transition ${
                            role === "jobseeker"
                                ? "bg-white text-black"
                                : "text-gray-400"
                        }`}
                    >
                        Job Seeker
                    </button>

                    <button
                        onClick={() => setRole("recruiter")}
                        className={`flex-1 py-3 rounded-xl font-medium transition ${
                            role === "recruiter"
                                ? "bg-white text-black"
                                : "text-gray-400"
                        }`}
                    >
                        Recruiter
                    </button>

                </div>

           
                <form className="space-y-5">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none focus:border-white"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none focus:border-white"
                    />

                    {role === "recruiter" && (
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none focus:border-white"
                        />
                    )}

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white outline-none focus:border-white"
                    />

                    <button
                        type="submit"
                        className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
                    >
                        Create Account
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-8">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-white font-semibold"
                    >
                        Sign In
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;