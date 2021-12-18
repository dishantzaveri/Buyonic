import React from 'react'
import wave from '../utils/lightwave.svg'
import logo from '../utils/logo.svg'

export const LoginSample = () => {
  return (
    <div class="inline-flex flex-col space-y-16 items-center justify-start bg-gray-100 bg-opacity-50 w-full min-h-full">
      <img class="" src={logo} alt=''/>
    <div class="flex flex-col space-y-9 items-center justify-end w-80 h-96">
        <p class="text-6xl text-center text-gray-700">Sign in</p>
        <p class="text-base text-center text-gray-700">Sign in and start managing your candidates!</p>
        <div class="w-72 h-11">
            <div class="flex items-center justify-start flex-1 h-full pl-4 pr-60 py-3 bg-gray-700 rounded-lg">
                <p class="text-sm leading-tight text-center text-gray-200">Login</p>
            </div>
        </div>
        <div class="w-72 h-11">
            <div class="flex items-center justify-start flex-1 h-full pl-5 pr-52 py-3 bg-gray-700 rounded-lg">
                <p class="text-sm leading-tight text-center text-gray-200">Password</p>
            </div>
        </div>
        <div class="w-72 h-11">
            <div class="flex items-center justify-center flex-1 h-full px-32 py-3 bg-green-400 shadow rounded-lg">
                <p class="text-base leading-tight text-center text-gray-700 capitalize">login</p>
            </div>
        </div>
    </div>
    <p class="text-base text-center text-gray-700">Don’t have an account? Register here</p>
    <img class="w-full absolute bottom-0" src={wave} alt=''/>
</div>
  )
}
