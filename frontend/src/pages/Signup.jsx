import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    role: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    const signupData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobileNo: formData.mobileNo,
      password: formData.password,
      role: formData.role
    };
    
    const result = await signup(signupData);
    
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
        {/* Left Side - Form */}
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNo"
                  placeholder="Enter mobile number"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-10"
                    required
                  />
                  <div
                    className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-10"
                    required
                  />
                  <div
                    className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a2634] text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled>Select your role</option>
                  <option value="buyer" className="text-black">Buyer</option>
                  <option value="seller" className="text-black">Seller</option>
                  <option value="admin" className="text-black">Admin</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full  bg-white text-[#1a2634] py-3 rounded-lg font-semibold hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors disabled:opacity-50"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:text-blue-300">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side - Branding */}
        <div className="w-1/2 bg-[#1a2634] flex flex-col justify-center items-center p-12">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Join Easybiznus</h1>
            <p className="text-gray-400 text-lg mb-8">
              Create your account and start growing your business with us.
            </p>
           
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col px-6 py-8">
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

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
          <input
            type="tel"
            name="mobileNo"
            placeholder="Mobile No"
            value={formData.mobileNo}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors pr-12"
              required
            />
            <div
              className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={24} /> : <EyeOff size={24} />}
            </div>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors pr-12"
              required
            />
            <div
              className="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-white transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <Eye size={24} /> : <EyeOff size={24} />}
            </div>
          </div>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border-2 border-gray-700 bg-[#1a2634] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="buyer" className="text-black">
              Buyer
            </option>
            <option value="seller" className="text-black">
              Seller
            </option>
            <option value="admin" className="text-black">
              Admin
            </option>
          </select>

          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-[#1a2634] py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#2a3644] active:bg-[#3a4654] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing up..." : "SIGNUP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
