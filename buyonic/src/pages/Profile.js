import { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from '../context/ThemeContext';
import { IconButton, Switch } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import wave from '../utils/lightwave.svg'
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import Swal from 'sweetalert2'

export const Profile = () => {

  const navigate = useNavigate()

  const { theme, setTheme } = useContext(ThemeContext)
  
  const { token, setToken, setUser } = useContext(GlobalContext)

  const [user, setUser1] = useState()

  const logout = () => {
    let config = {
      method: 'get',
      url: 'https://buyonic.herokuapp.com/auth/logout/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setToken('')
        localStorage.removeItem('token')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const Delete = () => {
    let config = {
      method: 'delete',
      url: 'https://buyonic.herokuapp.com/auth/profile/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setToken('')
      localStorage.removeItem('token')
      navigate('/login')
    })
    .catch((error, response) => {
      console.log(error, response);
    });
  }

  const PopUp = () => {
    Swal.fire({
      title: 'Logout',
      text: "Do you want to logout?",
      icon: 'question',
      background: '#1f2937',
      color: '#4ade80',
      confirmButtonColor: '#111827',
      cancelButtonColor: '#4ade80',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
      }
    })
  }

  const PopUp1 = () => {
    Swal.fire({
      title: 'Delete',
      text: "You won't get your account back!",
      icon: 'warning',
      background: '#1f2937',
      color: '#4ade80',
      confirmButtonColor: '#111827',
      cancelButtonColor: '#4ade80',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Delete()
      }
    })
  }

  function isDark() {
    return theme === 'dark'
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? 'dark' : 'light')
  }

  useEffect(() => {
    getProfile()
  }, [token])

  const getProfile = () => {
    let config = {
      method: 'get',
      url: 'https://buyonic.herokuapp.com/auth/profile/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      setUser(response.data)
      setUser1(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='min-h-screen w-full bg-gray-800 text-gray-200'>
      <Navbar />
      <div className='flex items-start justify-center space-x-8 px-48 py-12'>
        <div className='flex flex-col space-y-8 w-1/4'>
          <div className='w-full h-32 bg-gray-900 inline-flex items-center space-x-4 px-6 rounded-lg shadow-lg'>
            <img className='h-20 w-20 rounded-full' src='https://img.icons8.com/fluency/96/000000/test-account.png' alt=''/>
            <div>
              <h1 className='text-base'>Hello,</h1>
              {user ? 
                <h1 className='font-semibold text-xl'>{user.name}</h1> : 
                (
                  <div className='animate-pulse'>
                    <div className='h-6 w-24 bg-gray-600 rounded'></div>
                  </div>
                )
              }
            </div>
          </div>
          <div className='w-full bg-gray-900 flex flex-col items-center rounded-lg shadow-lg'>
            <Link to='/my-cart' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <ShoppingCartIcon />
              <h1>My Cart</h1>
            </Link>
            <Link to='/wishlist' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <FavoriteIcon />
              <h1>My Wishlist</h1>
            </Link>
            <Link to='/order-history' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <AccessTimeIcon />
              <h1>Order History</h1>
            </Link>
            <div className='w-full px-4 py-2 flex items-center space-x-2 border-b-2 border-gray-800'>
              <Switch
                checked={isDark()}
                onChange={e => toggleTheme(e)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1>Dark Mode</h1>
            </div>
            <div className='w-full px-6 py-4 flex space-x-4 cursor-pointer border-b-2 border-gray-800' onClick={() => PopUp()}>
              <PowerSettingsNewIcon />
              <h1>Logout</h1>
            </div>
            <div className='w-full px-6 py-4 flex space-x-4 cursor-pointer' onClick={() => PopUp1()}>
              <DeleteIcon />
              <h1>Delete Account</h1>
            </div>
          </div>
        </div>
        <div className='bg-gray-900 w-1/2 rounded-lg shadow-lg px-8 pt-4'>
          <div className='inline-flex justify-between w-full pb-3'>
            <h1 className='text-3xl font-bold'>Profile</h1>
            <Link to='edit'>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Name:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.name}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Email:</h1>
            {user ? 
              <div className='col-span-4 inline-flex justify-between items-center'>
                <h1 className='font-semibold text-xl '>{user.email}</h1>  
                {user.is_verified ? <h1 className='text-green-400 text-sm'>Verified</h1> : <h1 className='text-red-600 text-sm'>Not Verified</h1> } 
              </div> :
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Phone:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.contact}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Address:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.address}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>City:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.city}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>State:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.state}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 pb-5 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Balance:</h1>
            {user ? 
              <h1 className='font-semibold text-xl col-span-4'>{user.refund_balance}</h1> : 
              (
                <div className='animate-pulse col-span-4'>
                  <div className='h-6 w-full bg-gray-600 rounded'></div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <img src={wave} className='w-full absolute bottom-0' alt='' />
    </div>
  )
}
