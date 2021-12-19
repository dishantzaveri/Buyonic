import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import logo from '../utils/logo.svg';
import {
  Link
} from 'react-router-dom'
import { Navbar } from '../components/Navbar';

export const Home = () => {

  const { token } = useContext(GlobalContext)

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-[50px] text-white h-full w-full">
        <img src={logo} className="h-64" alt="logo" />
        <p>
          Token is {token ? token : ''}
        </p>
        <Link
          className="text-green-400 animate-bounce"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="text-green-400 animate-bounce"
          to="/register"
        >
          Register
        </Link>
        <Link
          className="text-green-400 animate-bounce"
          to="/register/verify"
        >
          Verfiy
        </Link>
      </div>
    </div>
  )
}
