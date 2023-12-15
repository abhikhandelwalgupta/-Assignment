import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfrimPassowrd, setConfrimShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confrimpassword: '',
        firstName: '',
        lastName: ''
    })

    const { email, password, confrimpassword, firstName, lastName } = formData


    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (!email || !password || !confrimpassword || !firstName || !lastName) {
            alert("Please Enter all fields ")
            return
        }

    }

    const handleOnChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className='bg-gray-50 dark:bg-gray-900 h-full'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  dark:border dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-6 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>create  your account</h1>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleOnSubmit}>
                            <div className='flex gap-4 flex-row justify-around'>
                                <div className='text-start'>
                                    <label htmlFor="firstName" className='block'>
                                        <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>First Name
                                            <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                        </p>

                                        <input type='text' placeholder='Enter First Name' name='firstName' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600' onChange={handleOnChange} />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className='block'>
                                        <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>last Name
                                            <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                        </p>

                                        <input type='text' placeholder='Enter last Name' name='lastName' id='lastName' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' onChange={handleOnChange} />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email' className='block   '>
                                    <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>Email Address
                                        <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                    </p>
                                    <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' placeholder='name@gmail.com' onChange={handleOnChange} />
                                </label>
                            </div>
                            <div className='flex gap-4 flex-row justify-around'>
                                <div className='text-start'>
                                    <label htmlFor="password" className='block relative'>
                                        <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>Password
                                            <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                        </p>

                                        <input type={`${showPassword ? "text" : "password"}`} name='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' required autoComplete='off' onChange={handleOnChange} />
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
                                <div>
                                    <label htmlFor="confrimPassword" className='block relative'>
                                        <p className='mb-2 font-medium text-base dark:text-white text-gray-900'>Confirm password
                                            <sup className='text-[#FF0000] ml-0.5'>*</sup>
                                        </p>

                                        <input type={`${showConfrimPassowrd ? "text" : "password"}`} name='confrimpassword' id='confrimPassword' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ' onChange={handleOnChange} />
                                        <span
                                            onClick={() => setConfrimShowPassword((prev) => !prev)}
                                            className="absolute right-3 top-[38px]  z-[10] cursor-pointer"
                                        >
                                            {showConfrimPassowrd ? (
                                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                            ) : (
                                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                            )}
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' >Sign up</button>
                        </form>
                        <p className='text-base font-light text-gray-500 '>Already account ? <Link to="/" className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp