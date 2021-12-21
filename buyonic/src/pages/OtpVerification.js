import { useContext, useState } from 'react'
import logo from '../utils/logo.svg'  
import lightlogo from '../utils/lightlogo.svg' 
import wave from '../utils/lightwave.svg'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'

export const OtpVerification = () => {
  const [otp, setOtp] = useState()
  const { token } = useContext(GlobalContext)
  const navigate = useNavigate()
  const verify = () => {
    let data = new FormData();
    data.append('otp', otp);

    let config = {
      method: 'post',
      url: 'https://buyonic.herokuapp.com/auth/otp/',
      headers: { 
        'Authorization': 'Token ' + token,
      },
      data : data
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      navigate('/home')
    })
    .catch((error) => {
      console.log(error);
      navigate('/home')
    });
  }
  return (
    <div className=''>
      <div className="flex flex-col space-y-4 items-center justify-center dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-700 w-full min-h-screen pb-24">
        <Link to='/home'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-8 items-center justify-center w-[420px]">
          <p className="text-4xl text-center">Verify your number</p>
          <p className="text-base text-center"> Enter the OTP sent on your phone number.</p>
          <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Enter OTP' value={otp} onChange={e => setOtp(e.target.value)}/> 
          <button 
            className='py-3 px-6 bg-gray-700 rounded-lg hover:shadow-lg hover:shadow-green-400/30  text-gray-200'
            onClick={() => verify()}
          >
            Verify Me
          </button>
        </div>
        <img src={wave} className='w-full absolute bottom-0' alt='' />
      </div>
    </div>
  )
}
