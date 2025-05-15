import React, { useState } from 'react';
import { TbMessageChatbotFilled } from 'react-icons/tb';
import { FcPortraitMode } from 'react-icons/fc';
import { FaArrowUp } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import axios from 'axios';

const ChatBot = () => {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

//  import axios from 'axios'; // <-- Make sure this import is present at the top

const handleSubmit = async (e) => {
  e.preventDefault();
  if (message.trim() === '') return;

  const userMessage = { sender: 'user', text: message };
  setMessages((prev) => [...prev, userMessage]);
  setMessage('');

  try {
    // Send message as an object
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/chatbot`,
      { message }
    );

    // Access reply from res.data
    if (res.data.reply) {
      const botMessage = { sender: 'bot', text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    }
  } catch (err) {
    console.error('API error:', err);
    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: 'Error connecting to AI.' },
    ]);
  }
};

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <div
        className={`text-white ${toggle?'hidden':""} text-4xl bg-blue-600 p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition`}
       
      >
        <TbMessageChatbotFilled  onClick={() => setToggle(!toggle)} />
      </div>

      {/* Chat Window */}
      {toggle && (
        <div className="w-[90vw] max-w-sm mt-3 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col animate-slide-up">
          {/* Header */}
          <div className="flex items-center gap-2 bg-green-600 p-3 text-white font-semibold">
            <FcPortraitMode className="text-3xl" />
            <p className="flex-1">Village Voice ChatBot</p>
            <FaAngleRight className="text-2xl bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"  onClick={() => setToggle(!toggle)} />
          </div>
          <p className='m-4 p-3 rounded-lg overflow-y-auto text-sm bg-slate-100 text-gray-700 space-y-2 max-h-60 max-w-35'>Hi👋 How can I help you today?</p>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 space-y-2 max-h-60">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[50%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white self-end text-right ml-auto max-w-28'
                    : 'bg-green-500 text-white self-start text-left  max-w-52'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center border-t p-3 gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="h-10 w-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              <FaArrowUp />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
