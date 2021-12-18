import React from 'react'
import logo from '../utils/logo.svg';
import {
  Link
} from 'react-router-dom'

export const Home = () => {
  return (
    <div className="text-center">
      <header className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[50px] text-white">
        <img src={logo} className="h-[40vmin]" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="text-[#61dafb] animate-bounce"
          to="login"
        >
          Login
        </Link>
        <Link
          className="text-[#61dafb] animate-bounce"
          to="login-sample"
        >
          Login Sample
        </Link>
      </header>
    </div>
  )
}
