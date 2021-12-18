import React from 'react'
import wave from '../utils/lightwave.svg'
import { Link } from 'react-router-dom';
import logo from '../utils/logo.svg'  
import lightlogo from '../utils/lightlogo.svg'  

export const Login = () => {
  return (
    <div className='dark'>
      <div className="flex flex-col space-y-12 items-center justify-center dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-700 w-full min-h-screen">
        <div className="flex flex-col space-y-8 items-center justify-end w-96 pb-24">
          <img src={logo} alt='' className='w-36'></img>
          <p className="text-6xl text-center">Sign in</p>
          <p className="text-base text-center">Sign in and start ordering!</p>
          <input className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='User Id'/>
          <input className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Password'/> 
          <div className='inline-flex justify-between w-full h-4'>
            <div className="inline-flex space-x-6 items-center justify-start">
              <input type='checkbox'  className='form-checkbox text-green-400 border-0 outline-0 ring-0 rounded bg-gray-700'id='remember-me' name='rememberMe'/>
              <label for='rememberMe' className="text-sm font-medium text-center">Remember me</label>
            </div>
            <Link to='' className="text-sm font-medium text-center text-green-400">Forgot password?</Link>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center w-full">
            <button className='w-full py-3 bg-green-400 rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50'>Login</button>
            <Link to='/register' className="text-sm font-medium text-center text-green-400">Don't have an account? Register here</Link>  
          </div>
        </div>
        <img src={wave} className='w-full absolute bottom-0' alt='' />
      </div>
    </div>
  )
}
