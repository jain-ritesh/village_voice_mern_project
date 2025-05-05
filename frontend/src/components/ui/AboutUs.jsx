import React from 'react';
import { FaBullhorn, FaLightbulb, FaHandshake, FaMapMarkedAlt, FaRegThumbsUp, FaRegComments } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="w-full  from-green-50 to-blue-50 px-6 py-12 lg:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-green-600 mb-6 underline underline-offset-8">About Us</h1>
        <p className="text-lg md:text-xl mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          <strong className="text-green-700">VillageVoice</strong> is a community-driven platform that empowers rural citizens to raise their voices,
          share ideas, and contribute to real development at the grassroots level.
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-green-200 p-6 transition duration-300">
            <div className="flex items-center gap-3 text-blue-500 mb-4 text-xl font-semibold">
              <FaBullhorn /> Our Mission
            </div>
            <p className="mb-4 text-gray-600">
              A digital bridge between villagers and decision-makers to submit problems and ideas that matter.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 bg-blue-100 p-3 rounded-lg">
                <FaRegComments className="text-green-600" /> Collect suggestions and complaints.
              </li>
              <li className="flex items-center gap-2 bg-blue-100 p-3 rounded-lg">
                <FaLightbulb className="text-yellow-500" /> Encourage tech-driven rural solutions.
              </li>
              <li className="flex items-center gap-2 bg-blue-100 p-3 rounded-lg">
                <FaHandshake className="text-blue-400" /> Promote transparency and collaboration.
              </li>
              <li className="flex items-center gap-2 bg-blue-100 p-3 rounded-lg">
                <MdGroups className="text-purple-500" /> Unite communities for change.
              </li>
            </ul>
          </div>

          {/* Why We Exist Card */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-green-200 p-6 transition duration-300">
            <div className="flex items-center gap-3 text-blue-500 mb-4 text-xl font-semibold">
              <FaMapMarkedAlt /> Why We Exist?
            </div>
            <p className="mb-4 text-gray-600">
              Rural voices often go unheard. VillageVoice ensures that feedback becomes visible and actionable.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 bg-green-100 p-3 rounded-lg">
                <FaRegComments className="text-indigo-500" /> Share development ideas or concerns.
              </li>
              <li className="flex items-center gap-2 bg-green-100 p-3 rounded-lg">
                <FaRegThumbsUp className="text-pink-500" /> Like or dislike community suggestions.
              </li>
              <li className="flex items-center gap-2 bg-green-100 p-3 rounded-lg">
                <FaLightbulb className="text-orange-400" /> Discover local innovation and solutions.
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-14 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Together, Let’s Build Smarter Villages 🚀</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Be part of the change. Join us in transforming rural India, one suggestion at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
