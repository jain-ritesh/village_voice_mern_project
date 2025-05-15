import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/AuthContext.jsx';
import { MdContacts, MdMessage } from "react-icons/md";
import { FaUserCircle, FaUser, FaLightbulb, FaHome, FaBars } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaDashcube } from "react-icons/fa6";
import { RiProgress5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AdminDashboard = () => {

  const { suggestion,setSuggestion, user, contact } = useContext(UserContext);
  const [userName, setUserName] = useState('')
  
  // console.log("Suggetions: ",suggestion)
  // console.log("Contact:  ", contact)

  const handleDelete = async (id) => {
    try{
      let confirmMess = confirm('You Want To Delete The Suggetion');
      if(!confirmMess) return;

      let res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/auth/suggestions/${id}`);
      if(res.data.success){
        toast.success("User Deleted Successfully.")
        setSuggestion((prevSuggestions) => prevSuggestions.filter((item) => item._id !== id));
        window.location.reload();
      }else{

        toast.error('Failed To Success Suggetion');
      }

    }catch(error){
       console.log('Some Error Is Occure: ',error);
       toast.error('Server Error');
    }
    // console.log("Data: ", id)
  }

  const totalSuggestions = suggestion?.length || 0;
  const totalUsers = user?.length || 0;
  let totalVillage = suggestion.map((ele) => {
    return ele.village
  })
  let countvillage = totalVillage?.length || 0;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const storeUser = JSON.parse(localStorage.getItem('user'));
    setUserName(storeUser.data.user.name);
  }, [])
  return (
    <div className="flex h-screen w-full bg-gray-100 font-sans">

      {/* Sidebar */}
      <aside className={`bg-[#104f41] text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} flex flex-col p-4`}>
        {/* Toggle Button */}
        <button
          className="mb-6 text-white text-xl hover:text-gray-300 transition"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {!isSidebarOpen ? <FaBars /> : <RxCross2 />}
        </button>

        {/* Sidebar content */}
        <h2 className={`text-xl font-semibold mb-6 transition-all duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Admin</h2>

        <nav className="flex flex-col space-y-4 text-sm">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-[#2c8a75] rounded-md transition">
            <FaDashcube />
            {isSidebarOpen && <span>Dashboard</span>}
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-[#2c8a75] rounded-md transition">
            <BiSolidMessageDetail />
            {isSidebarOpen && <span>Submissions</span>}
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-[#2c8a75] rounded-md transition">
            <FaUserCircle />
            {isSidebarOpen && <span>Users</span>}
          </a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-[#2c8a75] rounded-md transition">
            <MdContacts />
            {isSidebarOpen && <span>Contact</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto space-y-8  ">
        <header className="mb-6 flex justify-between ">
          <div >

          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500  mt-1 text-2xl">👋 Hello <span className="text-red-500 font-semibold">{userName}</span></p>
          </div>

           <a href="/"><button 
           className='bg-red-500 rounded-md p-2 m-auto font-semibold text-white hover:bg-green-500' >LogOut
          </button></a>
        </header>

        {/* Dashboard Overview Cards */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
            <FaLightbulb className="text-yellow-500 text-3xl mb-2" />
            <span className="text-xl font-bold">{totalSuggestions}</span>
            <p className="text-gray-600 text-sm">Development Suggestions</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
            <MdMessage className="text-green-500 text-3xl mb-2" />
            <span className="text-xl font-bold">45</span>
            <p className="text-gray-600 text-sm">Complaints</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
            <FaHome className="text-red-500 text-3xl mb-2" />
            <span className="text-xl font-bold">{countvillage}</span>
            <p className="text-gray-600 text-sm">Villages</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center">
            <FaUser className="text-blue-500 text-3xl mb-2" />
            <span className="text-xl font-bold">{totalUsers}</span>
            <p className="text-gray-600 text-sm">Users</p>
          </div>
        </section>

        {/* User Data  */}
        <section className="shadow-lg p-4 bg-white rounded-lg overflow-x-auto">
          <div className="min-w-full">
            <h3 className='p-4 font-semibold text-lg bg-white border-b'>Users Suggetions</h3>
         <div className='max-h-[350px] overflow-y-auto'>
            <table className="w-full  text-center table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm md:text-base">
                  <th className='border px-4 py-3'>Sr.No</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Village</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Suggetions</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {suggestion.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white even:bg-gray-50 text-gray-800 text-sm md:text-base"
                  >
                    <td className="p-3 border">{index + 1}</td>
                    <td className="p-3 border">{item.name}</td>
                    <td className="p-3 border">{item.village}</td>
                    <td className="p-3 border">
                      {new Date(item.date).toISOString().split("T")[0]}
                    </td>
                    <td className='p-3 border max-h-[100px] max-w-[300px] overflow-y-auto overflow-x-hidden text-justify scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>{item.suggestion}</td>
                    <td className="p-3 border text-yellow-600 font-semibold ">
                      <button className='bg-red-500 p-1 px-4 text-white rounded-lg hover:bg-red-200 hover:text-black'
                        onClick={() => handleDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>


        {/* Contact Data */}
        <section className='pt-6 overflow-x-auto bg-white rounded-lg shadow-md'>
          <div className='min-w-full'>
            <h2 className='p-4 font-semibold text-lg bg-white border-b'>Users Contact Data</h2>
   <div className='max-h-[350px] overflow-y-auto'>
            <table className='min-w-full text-sm md:text-base text-center border-collapse'>
              <thead>
                <tr className='bg-red-400 text-white'>
                  <th className='border px-4 py-3'>Sr.No</th>
                  <th className='border px-4 py-3'>Name</th>
                  <th className='border px-4 py-3'>Email</th>
                  <th className='border px-4 py-3'>Subject</th>
                  <th className='border px-4 py-3'>Message</th>
                </tr>
              </thead>
              <tbody>
                {
                  contact.map((item, index) => (
                    <tr key={index} className='bg-white even:bg-gray-100'>
                      <td className='border px-4 py-2'>{index + 1}</td>
                      <td className='border px-4 py-2'>{item.name}</td>
                      <td className='border px-4 py-2 break-all'>{item.email}</td>
                      <td className='border px-4 py-2'>{item.subject}</td>
                      <td className='border px-4 py-2 text-left'>
                        <div className='max-h-[100px] max-w-[300px] overflow-y-auto overflow-x-hidden text-justify scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
                          {item.message}
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div>
        </section>

      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminDashboard;
