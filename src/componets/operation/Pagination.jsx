import React from 'react'
import { Link } from 'react-router-dom'
import { TbTrashX } from "react-icons/tb";


const Pagination = ({ recourdPerPage, data, handleDelete }) => {
    console.log(data);
    const [currentPage, setCurrentPage] = React.useState(1)
    const lastIndex = currentPage * recourdPerPage
    const firstIndex = lastIndex - recourdPerPage
    const records = data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(data.length / recourdPerPage)
    const number = [...Array(npage + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage < npage) {
            setCurrentPage((prevPage) => prevPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1)
        }
    }

    const noPage = (num) => {
        if (num >= 1 && num <= npage) {
            setCurrentPage(num)
        }
    }

    return (
        <div>
            {
                records?.map((user, i) => (
                    <div className={`flex items-center justify-between border border-gray-700 `} key={user?.id}>
                        <div className='flex pr-2 pl-3 py-3  w-[8%]'>{i + 1}</div>
                        <div className='flex px-5 py-3 mx-auto w-[20%]'>{user.firstName} {user.lastName}</div>
                        <div className='flex px-3 py-3 mx-auto w-[22%]'>{user.email} </div>
                        <div className='flex px-5 py-3 mx-auto w-[15%]'>{user.username} </div>
                        <div className='flex px-5 py-3 mx-auto w-[20%]'>{user.phone} </div>
                        <div className='flex px-5 py-3 mx-auto w-[5%] -ml-3'>{user.age}y</div>
                        <div className='flex px-5 py-3 font-bold text-xl cursor-pointer mx-auto w-[10%] ml-3' onClick={() => handleDelete(user.id)}><TbTrashX /> </div>
                    </div>
                ))
            }
            <nav aria-label="Page navigation example mt-4 py-4">
                {
                    npage > 1 && (
                        <ul className="inline-flex -space-x-px text-sm mt-4   items-center justify-center">
                            {
                                currentPage !== 1 && (<li>
                                    <Link to="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => { prevPage() }}>Previous</Link>
                                </li>)
                            }
                            {
                                number.map((num, i) => (
                                    <li>
                                        <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => noPage(num)} key={num}>{num}</Link>
                                    </li>
                                ))
                            }

                            {
                                currentPage !== npage && (<li>
                                    <Link to="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPage}>Next</Link>
                                </li>)
                            }
                        </ul>
                    )
                }

            </nav>
        </div>
    )
}

export default Pagination