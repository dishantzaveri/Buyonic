import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import wave from '../utils/lightwave.svg'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../utils/logo.svg'  
import lightlogo from '../utils/lightlogo.svg' 
import axios from 'axios'

export const Login = () => {
  const { setToken } = useContext(GlobalContext)
  let navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(false);

  const [showPassword, setShowPassword] = useState(false)

  const login = () => {

    let data = new FormData();
    
    data.append('email', userId);
    data.append('password', password);

    let config = {
      method: 'post',
      url: 'https://buyoni.herokuapp.com/auth/login/',
      headers: {},
      data : data
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setToken(response.data.token)
      if (remember) {
        localStorage.setItem('token', JSON.stringify(response.data.token))
      }
      navigate('/')
    })
    .catch((error) => {
      console.log(error);
      setError(true)
    });
  }
  return (
    <div className=''>
      <div className="flex flex-col space-y-4 items-center justify-center dark:bg-gray-800 bg-gray-100 dark:text-gray-200 text-gray-800 w-full min-h-screen">
        <Link to='/home'>
          <img src={logo} alt='' className='w-36'></img>
        </Link>
        <div className="flex flex-col space-y-4 items-center justify-end w-96 pb-6">
          <p className="text-6xl text-center">Sign in</p>
          <p className="text-base text-center">Sign in and start ordering!</p>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-end w-96">
          <input type='text' className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='User Id' value={userId} onChange={e => setUserId(e.target.value)}/>
          <div className='w-full'>
            <input type={showPassword ? 'text' : 'password'} className='w-full text-gray-200 bg-gray-700 rounded-lg px-5 py-3 border-none focus:ring-2 outline-0 focus:ring-green-400' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/> 
            {showPassword ? <VisibilityOffIcon className='ml-[-40px]' onClick={() => setShowPassword(!showPassword)} /> : <VisibilityIcon className='ml-[-40px]' onClick={() => setShowPassword(!showPassword)} />}
            {error ? <h1 className='text-xs pt-2 text-red-600'>*Invalid Credentials</h1> : <h1>&ensp;</h1>}
          </div>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-end w-96 pb-24">
          <div className='inline-flex justify-between w-full h-4'>
            <div className="inline-flex space-x-6 items-center justify-start">
              <input type='checkbox'  className='form-checkbox text-green-400 border-0 outline-0 ring-0 rounded bg-gray-700'id='remember-me' onChange={() => setRemember(!remember)} checked={remember} name='rememberMe'/>
              <label htmlFor='rememberMe' className="text-sm font-medium text-center">Remember me</label>
            </div>
            <Link to='' className="text-sm font-medium text-center text-green-400">Forgot password?</Link>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center w-full">
            <button className='w-full py-3 bg-green-400 rounded-lg shadow-lg shadow-green-400/30 hover:shadow-green-400/50' onClick={() => login()}>Login</button>
            <Link to='/register' className="text-sm font-medium text-center dark:text-green-400 hover:text-green-400">Don't have an account? Register here</Link>  
          </div>
        </div>
        <img src={wave} className='w-full absolute bottom-0' alt='' />
      </div>
    </div>
  )
}
