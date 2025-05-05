import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactVideo from '../../assets/images/contact-us.mp4';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!contactData.name || !contactData.email || !contactData.subject || !contactData.message ){

      toast.error('Please Fill All Fields');
      return;
    }
    try{
     
      let res = await axios.post('http://localhost:3000/api/auth/send-email',contactData)
      // localStorage.setItem('UserData', JSON.stringify(contactData));
      // alert('Thank you for contacting us! ✉️');
      toast.success('Thank you for contacting us!');
      setContactData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }catch(error){
      console.error(error)
      toast.error('Something Went Wrong. Please Try Again');
  }
  };

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-10 px-6 md:px-20 flex flex-col items-center gap-10">
      
      {/* Reach Us Section */}
    
<div className="text-center w-full md:w-[650px]">
  <h2 className="text-3xl font-bold text-blue-600 underline underline-offset-8">Reach Us</h2>
  <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg space-y-8">
    {/* Phone */}
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-4 text-lg">
        <FaPhoneAlt className="text-green-600" />
        <a href="tel:+919175537554" className="text-gray-700 hover:text-green-600 transition">
          +91 91755 37554
        </a>
      </div>
      <div className="h-[2px] w-full bg-slate-200"></div>
    </div>

    {/* Email */}
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-4 text-lg">
        <FaEnvelope className="text-green-600" />
        <a href="mailto:support@villagevoice.com" className="text-gray-700 hover:text-green-600 transition">
          support@villagevoice.com
        </a>
      </div>
      <div className="h-[2px] w-full bg-slate-200"></div>
    </div>

    {/* Address */}
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-4 text-lg">
        <FaMapMarkerAlt className="text-green-600" />
        <a
          href="https://www.google.com/maps/@22.7555102,75.8915646,1624m/data=!3m1!1e3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-600 transition"
        >
          123 Green Street, Rural Development Nagar, Maharashtra, India
        </a>
      </div>
      <div className=""></div>
    </div>
  </div>
</div>


      {/* Contact Form and Video Section */}
      <div className="max-w-7xl w-full bg-white p-10 md:p-16 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Form */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-green-600 mb-6 underline underline-offset-8">
            Contact Us
          </h1>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              onChange={handleChange}
              name="name"
              value={contactData.name}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              onChange={handleChange}
              name="email"
              value={contactData.email}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              onChange={handleChange}
              name="subject"
              value={contactData.subject}
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              onChange={handleChange}
              name="message"
              value={contactData.message}
              rows="4"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Video */}
        <div className="flex justify-center items-center">
          <video
            className="w-full h-80 md:h-full rounded-2xl object-cover"
            src={contactVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactUs;
