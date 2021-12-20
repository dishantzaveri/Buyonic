import { useContext } from 'react'
import logo from '../utils/logo.svg'  
import lightlogo from '../utils/lightlogo.svg' 
import wave from '../utils/lightwave.svg'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import axios from 'axios'

export const Verify = () => {
  const { token } = useContext(GlobalContext)
  const navigate = useNavigate()
  const verify = () => {
    let config = {
      method: 'get',
      url: 'https://buyonic.herokuapp.com/auth/waiting',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      navigate('/home')
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className=''>
      <div className="flex flex-col space-y-4 items-center justify-center dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-700 w-full min-h-screen pb-24">
        <Link to='/home'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-8 items-center justify-center w-[420px]">
          <p className="text-4xl text-center">Verify your email</p>
          <p className="text-base text-center"> Mail have been sent to your Email Address. To verify your account, please confirm your email in the mail. After clicking of the link sent on email, click the below button.</p>
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
