import React, { useContext, useEffect, useState } from 'react';
import { FaLightbulb, FaRegHandshake, FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
const Section = () => {

  const {user} = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()
  const handleAddSuggestio = ()=>{
    navigate('/suggetion-form')
  }
  useEffect(()=>{
    let storeUser = localStorage.getItem(JSON.stringify('user'))
  })
  return (
    <section className="w-full bg-gradient-to-br from-green-100 to-green-200 text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-[#256D85]">
          Welcome to <span className="text-[#3EB599]">VillageVoice</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg mb-6">
          Empowering villagers to raise concerns and suggest development ideas for a better tomorrow.
        </p>

        {/* CTA Button */}
        <button onClick={handleAddSuggestio} 
        className="bg-[#3EB599] hover:bg-[#2f9e83] text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          Submit Suggestion
        </button>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <FaLightbulb className="mx-auto text-3xl text-[#3EB599]" />
            <h3 className="font-semibold mt-2">Share Bright Ideas</h3>
            <p className="text-sm mt-1">Suggest solutions for local issues like water, roads, or education.</p>
          </div>
          <div>
            <FaRegHandshake className="mx-auto text-3xl text-[#3EB599]" />
            <h3 className="font-semibold mt-2">Build Community Support</h3>
            <p className="text-sm mt-1">Let people vote or support your suggestions.</p>
          </div>
          <div>
            <FaMapMarkedAlt className="mx-auto text-3xl text-[#3EB599]" />
            <h3 className="font-semibold mt-2">Track Local Development</h3>
            <p className="text-sm mt-1">Follow suggestions status and see what changes are happening.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
 