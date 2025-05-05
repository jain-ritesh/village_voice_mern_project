import React from 'react'
import notfound from '.././assets/images/404.jpg'
import {  useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate('/login')
    }
  return (
    <div className=''>
   <img src={notfound} alt="img" className='w-full z-0 h-[100vh] object-cover relative' />
     <button onClick={handleNavigate}
     className='p-2 absolute uppercase z-99 top-[90%] left-[46%] text-white border-white border-2 cursor-pointer hover:translate-y-1 transition-all font-bold rounded-lg bg-transparent  '> Go BAck</button>
    </div>
  )
}

export default NotFound