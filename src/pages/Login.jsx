import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white flex align-middle justify-center">
   
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Welcome Back
            </h2>

            <p className="text-gray-400 mt-3">
              Sign in to continue your job search.
            </p>
          </div>

          <form className="mt-10 space-y-5">

            <div>
              <label className="text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none focus:border-white transition"
              />
            </div>

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-gray-400 hover:text-white"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Sign In
            </button>

          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-white font-medium"
            >
              Sign Up
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;