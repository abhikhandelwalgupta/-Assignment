import React, { useEffect, useState } from 'react'
import Users from "../../data/users.json"

const Home = () => {


    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        setUsersData(Users.users)

    }, [usersData])

    const exportUserList = async () => {
        const userArray = await usersData.map(user => Object.values(user))
        userArray.unshift(['id', 'firstName', 'lastName', 'age', 'gender', 'email', 'phone', 'username', 'password', 'image'])


        const csvContent = "data:text/csv;charset=utf-8,"
            + userArray.map(row => row.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        let temp_link = document.createElement('a')
        temp_link.setAttribute("href", encodedUri)
        temp_link.setAttribute("download", `users.csv`)
        document.body.appendChild(temp_link);
        document.body.removeChild(temp_link)
        temp_link.click();


        // temp_link.style.display = "none";


    }

    return (
        <>
            <div className='flex items-end justify-between right-36'>
                <div className='flex gap-4'>
                    <label className='flex items-center gap-4'>
                        <input type='text' placeholder='Search User' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' />
                    </label>
                    <button className='py-2  bg-primary-900 px-3 rounded-md' >Search</button>
                </div>
                <div>
                    <button className='py-2  bg-primary-900 px-3 rounded-md' onClick={() => exportUserList()} >Export user list</button>
                </div>
            </div>
            <div className='flex flex-col w-full gap-24'>
                <div className='my-8 text-gray-900'>
                    <div className='flex justify-between border-b border-black'>
                        <p className='px-5 py-3 '>S. no</p>
                        <p className='px-5 py-3'>Name </p>
                        <p className='px-5 py-3'> Email </p>
                        <p className='px-5 py-3'>Username</p>
                        <p className='px-5 py-3'>phone number</p>
                    </div>
                    {
                        usersData?.map((user, i) => (
                            <div className={`flex items-center justify-between border border-gray-700 `} key={user?.id}>
                                <div className='flex px-5 py-3 '>{i + 1}</div>
                                <div className='flex px-5 py-3'>{user.firstName} {user.lastName}</div>
                                <div className='flex px-5 py-3'>{user.email} </div>
                                <div className='flex px-5 py-3'>{user.username} </div>
                                <div className='flex px-5 py-3'>{user.phone} </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Home