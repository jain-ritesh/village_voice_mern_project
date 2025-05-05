import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields!");
      return;
    }
    // localStorage.setItem('userName',JSON.stringify(formData));

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", formData);

      // Save token and user role in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem('user',JSON.stringify(res))
      localStorage.setItem("role", res.data.user.role);

      toast.success("Login Successfully ✅");

      // Redirect based on user role
      if (res.data.user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/home");
      }

      // Reset form data
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login Failed, Error-> ", error.message);
      toast.error("Login Failed! ❎");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#3EB599]">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center bg-white md:w-1/2 p-8 text-center">
        <h2 className="text-[#3EB599] font-bold text-4xl mb-6">Login to Your Account</h2>
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              className="bg-slate-100 p-3 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              className="bg-slate-100 p-3 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-[#3EB599] text-white py-3 rounded-full font-semibold uppercase hover:bg-white hover:border-[#3EB599] border-2 hover:text-[#3EB599] transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center text-white md:w-1/2 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">New Here?</h2>
        <p className="mb-6 text-lg">Sign up and discover a great amount of new opportunities!</p>
        <button
          onClick={handleNavigate}
          className="px-6 py-3 border-2 border-white rounded-full uppercase font-semibold hover:bg-white hover:text-[#3EB599] transition duration-300"
        >
          Sign Up
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;