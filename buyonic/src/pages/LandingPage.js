import wave from '../utils/lightwave.svg'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../utils/logo.svg'  
import lightlogo from '../utils/lightlogo.svg' 
import axios from 'axios'
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const LandingPage = () => {

    const navigate = useNavigate()

    const { token } = useContext(GlobalContext)

    useEffect(() => {
        if (token !== '' && token !== null) {
            navigate('/home')
        }
    }, [token])
  
    return (
        <div className='dark:bg-gray-800 bg-gray-100 flex justify-center items-center'>
        <div className="flex flex-col space-y-12 items-center justify-center dark:text-gray-200 text-gray-800 w-1/2 min-h-screen">
            <Link to='/home'>
            <img src={logo} alt='' className='w-36'></img>
            </Link>
            <p className="text-6xl text-center">Be Unique with Buyonic</p>
            <div className='inline-flex justify-around items-center w-full'>
                <Link to='/login' className='py-3 px-24 bg-green-400 rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50'>Login</Link>
                <Link to='/register' className='py-3 px-24 hover:shadow-green-400/40 bg-gray-900 rounded-lg shadow-lg shadow-green-400/20'>Signin</Link>
            </div>
            <img src={wave} className='w-full absolute bottom-0' alt='' />
        </div>
        </div>
    )
}
