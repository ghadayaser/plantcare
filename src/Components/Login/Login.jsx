import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required!";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("✅ Login successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050F02] px-6">
      <motion.div
        className="bg-gradient-to-b from-[#253221] via-[#40502f] to-[#050F02] p-10 rounded-2xl shadow-xl max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-[#d4c8a5] mb-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Login
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left">
            <label className="block text-[#e0d7c2] font-medium text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className={`w-full p-3 rounded-lg bg-[#2A3320] text-white focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-[#8c826d]"
              }`}
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="text-left">
            <label className="block text-[#e0d7c2] font-medium text-lg mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className={`w-full p-3 rounded-lg bg-[#2A3320] text-white focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-[#8c826d]"
              }`}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            className="w-full p-3 bg-[#8c826d] text-[#121212] font-bold rounded-lg shadow-md hover:bg-[#bab09b] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-[#e0d7c2] text-sm">
          <a href="#" className="hover:underline">Forgot password?</a> | 
          <a href="" className="hover:underline ml-2">Create an account</a>
        </div>
      </motion.div>
    </div>
  );
}
