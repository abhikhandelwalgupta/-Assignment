import React, { useState } from 'react'
import Users from "../../data/users.json"
import Pagination from '../operation/Pagination';
import { FaSort } from "react-icons/fa";


const Home = () => {


    const [usersData, setUsersData] = useState(Users.users);
    const [searchVal, setSearchVal] = useState("")
    const [ageSort, setAgeSort] = useState("ace")
    const [nameSort, setNameSort] = useState("ace")



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
    }

    const handleSearchClick = async () => {
        if (searchVal === "") {
            setUsersData(Users.users)
            return
        }

        const filterBySearch = await Users.users.filter((item) => item.firstName.toLowerCase().includes(searchVal.toLowerCase()))
        setUsersData(filterBySearch)
    }

    const handleDelete = (num) => {
        const deleteFilter = usersData.filter((item) => item.id !== num)
        setUsersData(deleteFilter)
    }

    const handleNameSorting = () => {

        if (nameSort === "ace") {
            setUsersData([...usersData.sort((a, b) => {
                let fa = a.firstName.toLowerCase(),
                    fb = b.firstName.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            })])
            setNameSort("desc")
        } else {
            setUsersData([...usersData.sort((a, b) => {
                let fa = a.firstName.toLowerCase(),
                    fb = b.firstName.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            })])
            setNameSort("ace")
        }
    }

    const handleAgeSorting = () => {
        if (ageSort === "ace") {

            setUsersData([...usersData.sort((a, b) => {
                return a.age - b.age;
            })])
            setAgeSort("desc")
        } else {
            setUsersData([...usersData.sort((a, b) => {
                return b.age - a.age;
            })])
            setAgeSort("ace")
        }


        console.log(usersData);
    }
    // useEffect(() => {
    //     handleAgeSorting()
    // }, [usersData])



    return (
        <>
            <div className='flex items-end justify-between right-36'>
                <div className='flex gap-4'>
                    <label className='flex items-center gap-4'>
                        <input type='text' placeholder='Search User' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600' onChange={(e) => setSearchVal(e.target.value)} />
                    </label>
                    <button className='py-2  bg-primary-900 px-3 rounded-md' onClick={() => handleSearchClick()} >Search</button>
                </div>
                <div>
                    <button className='py-2  bg-primary-900 px-3 rounded-md' onClick={() => exportUserList()} >Export user list</button>
                </div>
            </div>
            <div className='flex flex-col w-full gap-24'>
                <div className='my-8 text-gray-900'>
                    <div className='flex justify-between border-b border-black'>
                        <p className='flex pr-2 pl-3 py-3 items-center w-[8%] '>S. no </p>
                        <p className='flex px-5 mx-auto py-3 w-[20%] items-center gap-x-0.5 cursor-pointer' onClick={handleNameSorting}>Name <span className='text-xs'><FaSort /></span></p>
                        <p className='flex px-3 py-3 w-[22%]'> Email </p>
                        <p className='flex px-5 py-3 mx-auto w-[15%]'>Username</p>
                        <p className='flex px-5 py-3 mx-auto w-[20%]'>phone number</p>
                        <p className='flex px-5 py-3 mx-auto w-[5%] items-center gap-x-0.5 cursor-pointer mr-3' onClick={handleAgeSorting}>Age <span className='text-xs'><FaSort /></span></p>
                        <p className='flex px-5 py-3 mx-auto w-[10%]'>Action</p>
                    </div>
                    {
                        <Pagination recourdPerPage={10} data={usersData} handleDelete={handleDelete} />
                    }
                </div>

            </div>
        </>
    )
}

export default Home