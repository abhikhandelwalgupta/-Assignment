import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

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
                <button tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                    onClick={() => logout()}
                >
                    <div className="grid place-items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd"></path>
                        </svg>
                    </div>Log Out
                </button>
            </nav>
        </div>
    )
}

export default SideBar