import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1522] text-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="w-1/2 bg-[#1a2634] flex flex-col justify-center items-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-gray-400 text-lg mb-8">
              Access your Easybiznus account and manage your business efficiently.
            </p>
           
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Easybiznus</h1>
              <p className="text-sm text-gray-400">Lets Grow Solid</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500 text-white p-3 rounded text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <a href="/signup" className="text-sm text-blue-400 hover:text-blue-300">
                  Create an account
                </a>
                {/* <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a> */}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full  bg-white text-[#1a2634] py-3 rounded-lg font-semibold hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col justify-center px-6 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Easybiznus</h1>
          <p className="text-sm text-gray-400">Lets Grow Solid</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/90 text-white p-4 rounded-xl text-sm shadow-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="flex justify-between w-full text-sm text-gray-400 mb-8">
            <a href="/signup" className="hover:text-blue-400 transition-colors">Sign Up</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full  bg-white text-[#1a2634] py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
