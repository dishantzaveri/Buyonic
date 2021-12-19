import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  Badge,
  Stack,
  Avatar,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import companynamedark from '../utils/companynamedark.svg'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='h-[64px] w-full bg-green-400 px-12 inline-flex items-center justify-between'>
      <Link to='/home'>
        <img src={companynamedark} alt='' className='h-6' />
      </Link>
      <div className='w-[70vmin] inline-flex'>
        <input 
          type="text" placeholder='Search For Products and More'
          className='w-full bg-gray-200 rounded-full text-base px-6 text-gray-900'
        />
        <div className='ml-[-44px]'>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <Stack direction='row' spacing={4} >
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Link to='/profile'>
          <Avatar className='cursor-pointer' sx={{ bgcolor: grey[800] }}>M</Avatar>
        </Link>
      </Stack>
    </div>
  )
}
