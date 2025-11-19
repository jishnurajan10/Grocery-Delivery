import React from 'react'
import {assets} from '../assets/assets.js'
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import toast from 'react-hot-toast';

const Signup  = () => {

  const { navigate } = useContext(AppContext);
  const [formData, setFormData] = useState({ 
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Signup Successfull");
    navigate('/login');
  };
  return (
    <div className="py-12 h-screen bg-[#0b482f]" 
    style={{ backgroundImage: `url(${assets.footer_img})` }}>
      <div>
        <h1 className='text-4xl text-white font-bold text-center mb-8 capitalize'>
          Signup to Continue</h1>
        <form 
        onSubmit={submitHandler} 
        className='max-w-md mx-auto text-white p-4 border border-white rounded'>
          <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="email">Name</label>
            <input 
            type='text'
            name='name'
            onChange={handleChange}
            value={formData.name}
            placeholder='Enter your Name' 
            required  
            className='w-full outline-none border border-white py-3 p-2 rounded'
            />
          </div>
          <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="email">Email</label>
            <input 
            type='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
            placeholder='Enter Your Email' 
            required  
            className='w-full outline-none border border-white py-3 p-2 rounded'
            />
          </div>
          <div className='text-white flex flex-col gap-2 mb-4'>
            <label htmlFor="password">Password</label>
            <input 
            type='password'
            name='password'
            onChange={handleChange}
            value={formData.password}
            placeholder='Enter Your Password' 
            required 
            className='w-full outline-none border border-white py-3 p-2 rounded'
            />
          </div>
          <button className='bg-primary text-white cursor-pointer w-full py-3 rounded'>
            Signup
          </button>
          <p className='mt-3'>
           Already Have an Account? {" "}
          <Link to={'/login'} className='text-primary underline'>
          Login
          </Link>
          </p>
        </form>
      </div>
    </div>
  )
} 

export default Signup;