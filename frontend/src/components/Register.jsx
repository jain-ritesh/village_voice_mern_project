import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCommentDots } from "react-icons/fa";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// import usenavigation from 
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', formData);
      toast.success('Registered Successfully ✅');
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      // navigate('/login');

    } catch (error) {
      console.error("Login Failed, Error-> ", error.message);
      toast.error('Registered Failed ❎');
    }
    // console.log(formData);


  };

  useEffect(() => {
    
  }, [formData]);

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#3EB599]">
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}

      {/* Left Side */}
      <div className="flex flex-col justify-center items-center text-white md:w-1/2 p-8 text-center">
        <h2 className="font-bold text-4xl mb-4">Welcome Back!</h2>
        <p className="mb-6 text-lg">
          To keep connected with us, please login with your personal info.
        </p>
        <button onClick={handleNavigate}
          className="px-6 py-2 border-2 border-white rounded-full uppercase font-semibold hover:bg-white hover:text-[#3EB599] transition duration-300">
          Sign In
        </button>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center bg-white md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-[#3EB599] mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          {/* Name Field */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="p-3 pl-10 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="p-3 pl-10 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="p-3 pl-10 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="p-3 pl-10 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
            />
          </div>
          
          <div className="relative">
            {/* <label className="block mb-1 font-medium text-gray-700">Select Your Role</label> */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
            >
              <option value="">-- Select Role --</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>


          {/* Message Field */}
          <div className="relative">
            <FaCommentDots className="absolute top-4 left-3 text-gray-400 text-lg" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 pl-10 rounded-lg bg-slate-100 w-full focus:outline-none focus:ring-2 focus:ring-[#3EB599]"
              rows="3"
            ></textarea>
          </div>


          <button
            type="submit"
            className="bg-[#3EB599] text-white py-3 rounded-full font-semibold uppercase hover:border-[#3EB599] hover:bg-white hover:text-[#3EB599] border-2 border-white transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* <ToastContainer /> */}

      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
};

export default Register;
