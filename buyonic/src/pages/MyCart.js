import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {
  Outlet,
} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { OrderProduct } from '../components/OrderProduct';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

export const MyCart = () => {
  
  const { token } = useContext(GlobalContext)

  const [productList, setProductList] = useState()

  const [payment, setPayment] = useState()

  const getProducts = () => {
    let config = {
      method: 'get',
      url: 'https://buyonic.herokuapp.com/product/pay',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setProductList(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getProducts()
  }, [])

  const makePayment = () => {
    let config = {
      method: 'post',
      url: 'https://buyonic.herokuapp.com/product/pay/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setPayment(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      {payment ? <html>{payment}</html> : 
        <div className="bg-gray-800 min-h-screen">
          <Navbar />
          <div className='px-48 py-12'>
            <div className='flex justify-between items-center pb-8'>
              <h1 className='text-gray-200 text-5xl font-semibold'>My Orders</h1>
              <div className='inline-flex items-center rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/40 bg-green-400 px-3 py-2 h-12 text-gray-800 ml-6 cursor-pointer' onClick={() => makePayment()} >
                <ShoppingCartIcon />
                <h1 className='font-semibold text-lg pl-1'>Make Payment</h1>
              </div>
            </div>
            <div className='grid grid-cols-3 justify-center gap-16'>
              {productList && productList.map(product => (
                <div className='col-span-1 shadow-lg'>
                  <OrderProduct product={product} key={product.product.id} />
                </div>
              ))}
            </div>
          </div>
          <Outlet />
        </div>
      }
    </div>
  )
}
