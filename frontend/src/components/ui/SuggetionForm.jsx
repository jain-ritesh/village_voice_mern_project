import React, { useEffect, useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const SuggetionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    village: "",
    suggestion: "",
  });
  
  // console.log('User Data',user)
  // console.log('Suggetion Data Data',suggestion)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.name || !formData.village || !formData.suggestion){
      toast.error('Please Fill All Fileds!')
    }
    try{
      let res = axios.post('http://localhost:3000/api/auth/suggetion-form',formData);
      toast.success(" Suggestion Submitted Successfully!");

      setFormData({
        name: "",
        village: "",
        suggestion: ""
      });
    }catch(error){
      toast.error('Something Wrong!.')

    }
    // console.log("Submitted Data: ", formData);


    // Reset Form
   
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Optional: Logging or API side effects
  }, []);

  return (
    <div className='w-full bg-gradient-to-b from-green-100 via-white to-green-50 min-h-screen py-10 px-4 flex justify-center items-center'>
      <div className="bg-white shadow-2xl rounded-xl max-w-xl w-full p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Share Your Village Suggestion</h1>
        <p className="text-center text-gray-600 mb-6">Help us bring positive changes to your village by submitting a thoughtful development suggestion.</p>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
          
          {/* Name Input */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-green-400 text-lg" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-gray-50"
              required
            />
          </div>

          {/* Village Input */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute top-3 left-3 text-green-400 text-lg" />
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              placeholder="Village Name"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-gray-50"
              required
            />
          </div>

          {/* Suggestion Input */}
          <div className="relative">
            <FaLightbulb className="absolute top-3 left-3 text-green-400 text-lg" />
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              placeholder="Your Suggestion"
              rows="3"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 bg-gray-50 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Submit Suggestion
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SuggetionForm;
