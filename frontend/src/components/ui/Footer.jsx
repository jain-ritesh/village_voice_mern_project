import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Companylogo from '../../assets/images/logo-1.png';
import insta from '../../assets/images/insta.png';
import tweter from '../../assets/images/tweter.png';
import linkdin from '../../assets/images/linkdin.png';

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-slate-900 text-white">
      {/* Top Section */}
      <div className="flex flex-wrap justify-around py-10 px-5 md:px-20">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src={Companylogo}
            alt="Company Logo"
            width={80}
            className="p-2 rounded-full mb-4"
          />
          <p className="max-w-xs text-center md:text-left text-gray-300">
            VillageVoice is a community-driven platform that empowers rural
            citizens to raise their voices, share ideas, and contribute to real
            development at the grassroots level.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt  className="text-green-400" />
            <a
              href="https://www.google.com/maps/@22.7555102,75.8915646,1624m/data=!3m1!1e3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              Vijay Nagar, Indore, Madhya Pradesh
            </a>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-green-400" />
            <a
              href="tel:+91 9175537554"
              className="hover:text-green-400 transition"
            >
              +91 9175537554
            </a>
          </div>

          <div className="flex items-center gap-2 mb-2">
            < FaEnvelope className="text-green-400" />
            <a
              href="mailto:support@villagevoice.com"
              className="hover:text-green-400 transition"
            >
              support@villagevoice.com
            </a>
          </div>

          

        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/home"
                className="hover:text-green-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-green-400 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="contact"
                className="hover:text-green-400 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Terms and Policies */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Terms</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="privacy-policy"
                className="hover:text-green-400 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="term-condition"
                className="hover:text-green-400 transition"
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 py-5 border-t border-gray-700">
        <a
          href="https://www.linkedin.com/in/riteshjain07/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img src={linkdin} alt="LinkedIn" width={40} />
        </a>
        <a
          href="https://x.com/RiteshJ32540247"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img src={tweter} alt="Twitter" width={40} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img src={insta} alt="Instagram" width={40} />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-slate-800 text-gray-400">
        &copy; 2025 VillageVoice. All rights reserved. Ritesh Jain
      </div>
    </div>
  );
};

export default Footer;