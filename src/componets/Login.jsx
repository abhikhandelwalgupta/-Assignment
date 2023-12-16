/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Users from "../data/users.json"
import { useCookies } from 'react-cookie';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [usersData, setUsersData] = useState()
    const [cookies, setCookie] = useCookies(['users']);
    const navigate = useNavigate();


    useEffect(() => {
        if (cookies.name !== undefined) {
            navigate("/dashboard")
        }
    }, [])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);

        if ((email === undefined && email === null) || (password === undefined && password === null)) {
            alert("Please fill out all fields")
            return
        }



        let { users } = Users;
        const isUser = await users.filter((user) => user.email === email && user.password === password)

        if (!isUser.length) {
            alert("Please enter valid email id ")
            return
        }
        setUsersData(isUser)
        console.log(usersData);

        if (!usersData) {
            alert("please try again. Something went wrong ")
            return
        }
        console.log(usersData.length);
        localStorage.setItem("user", JSON.stringify(usersData[0]))
        setCookie('name', JSON.stringify(usersData[0]));

        navigate("/dashboard/home")


    }

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className='bg-gray-50 dark:bg-gray-900 h-full'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  dark:border dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-6 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign in your account</h1>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleOnSubmit}>
                            <div>
                                <label htmlFor='email' className='block   '>
                                    <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>Email Address
                                        <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                    </p>
                                    <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' placeholder='name@gmail.com' required onChange={handleOnChange} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor='password' className='relative'>
                                    <p className='block mb-2  font-medium text-base dark:text-white text-gray-900'>
                                        Password
                                        <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                    </p>
                                    <input type={`${showPassword ? "text" : "password"}`} name='password' id='password' className='relative bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' required onChange={handleOnChange} />
                                    <span
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        className="absolute right-3 top-[38px]  z-[10] cursor-pointer"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                        ) : (
                                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                        )}
                                    </span>
                                </label>
                            </div>
                            <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' >Sign in</button>
                        </form>
                        <p className='text-base font-light text-gray-500 '>Don't have an account yet? <Link to="/sign-up" className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Sign Up</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login