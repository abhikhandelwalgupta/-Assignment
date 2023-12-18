import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { FaHouseUser, FaHome, FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SideBar = () => {
    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem('user');
        Cookies.remove('users')
        navigate("/")

    }
    return (
        <div className="relative flex flex-col bg-clip-border rounded-sm bg-white text-green-700 h-[calc(100vh)] w-full max-w-[300px] p-4 shadow-xl shadow-blue-gray-900-5">
            <div className='mb-2 p-4'>
                <h5 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900'>Assignment</h5>
            </div>
            <nav className='flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700'>
                <Link to="/dashboard/home" className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none' tabIndex="0">
                    <div className="grid place-items-center mr-4">
                        <FaHome className='h-5 w-5' />
                    </div>
                    Home
                </Link>
                <Link to="/dashboard/add-user" className='flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none' tabIndex="0">
                    <div className="grid place-items-center mr-4">
                        <FaHouseUser className='h-5 w-5' />
                    </div>
                    Add Users
                </Link>
                <button tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                    onClick={() => logout()}
                >
                    <div className="grid place-items-center mr-4">
                        <FaPowerOff className="h-5 w-5" />
                    </div>Log Out
                </button>
            </nav>
        </div>
    )
}

export default SideBar