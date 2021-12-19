import { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { ThemeContext } from '../context/ThemeContext';
import { IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import wave from '../utils/lightwave.svg'
import EditIcon from '@mui/icons-material/Edit';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import Swal from 'sweetalert2'

export const Profile = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  
  const { setToken } = useContext(GlobalContext)

  const logout = () => {
    let config = {
      method: 'get',
      url: 'https://buyoni.herokuapp.com/auth/logout/',
      headers: { 
        'Authorization': 'Token ad2542dbb3666551c3f77fc89f0ae7e4d9b3b15d'
      }
    };
    
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setToken('')
        localStorage.removeItem('token')
        
      })
      .catch((error) => {
        console.log(error);
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

  function isDark() {
    return theme === 'dark'
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? 'dark' : 'light')
  }
  return (
    <div className='min-h-screen w-full bg-gray-800 text-gray-200'>
      <Navbar />
      <div className='flex items-start justify-center space-x-8 px-48 py-12'>
        <div className='flex flex-col space-y-8 w-1/4'>
          <div className='w-full h-32 bg-gray-900 inline-flex items-center space-x-4 px-6 rounded-lg shadow-lg'>
            <div className='h-20 w-20 bg-white rounded-full'>

            </div>
            <div>
              <h1 className='text-base'>Hello,</h1>
              <h1 className='font-semibold text-xl'>Mihir Shinde</h1>
            </div>
          </div>
          <div className='w-full bg-gray-900 flex flex-col items-center rounded-lg shadow-lg'>
            <Link to='/my-cart' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <ShoppingCartIcon />
              <h1>My Cart</h1>
            </Link>
            <Link to='/order-history' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <AccessTimeIcon />
              <h1>Order History</h1>
            </Link>
            <Link to='/wishlist' className='w-full px-6 py-4 flex items-center space-x-4 border-b-2 border-gray-800'>
              <FavoriteIcon />
              <h1>My Wishlist</h1>
            </Link>
            <div className='w-full px-4 py-2 flex items-center space-x-2 border-b-2 border-gray-800'>
              <Switch
                checked={isDark()}
                onChange={e => toggleTheme(e)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <h1>Dark Mode</h1>
            </div>
            <div className='w-full px-6 py-4 flex space-x-4 cursor-pointer' onClick={() => PopUp()}>
              <PowerSettingsNewIcon />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
        <div className='bg-gray-900 w-1/2 rounded-lg shadow-lg px-8 pt-6'>
          <div className='inline-flex justify-between w-full pb-4'>
            <h1 className='text-3xl font-bold'>Profile</h1>
            <IconButton>
              <EditIcon />
            </IconButton>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Name:</h1>
            <h1 className='col-span-4'>Mihir Shinde</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Email:</h1>
            <h1 className='col-span-4'>mihirushinde29@gmail.com</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Phone:</h1>
            <h1 className='col-span-4'>9320423965</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Address:</h1>
            <h1 className='col-span-4'>C2/26/0:2, Sector-16</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>City:</h1>
            <h1 className='col-span-4'>Vashi</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>State:</h1>
            <h1 className='col-span-4'>Maharashtra</h1>
          </div>
          <div className='grid grid-cols-6 grid-rows-1 border-t-2 border-gray-800 py-4 items-center'>
            <h1 className='col-span-2 font-semibold text-lg'>Balance:</h1>
            <h1 className='col-span-4'>00.00</h1>
          </div>
        </div>
      </div>
      <img src={wave} className='w-full absolute bottom-0' alt='' />
    </div>
  )
}
