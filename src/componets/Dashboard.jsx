import React from 'react'
import SideBar from './Dashboard/SideBar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div className='relative bg-gray-300 flex min-h-[calc(100vh-3.5rem)]'>
            <SideBar />
            <div className='h-[calc(100vh)] flex-1 overflow-auto'>
                <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
                    <div className='w-full bg-white rounded-lg p-4 shadow-lg'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
