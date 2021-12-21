import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import {
  Outlet,
  useNavigate,
} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { Product } from '../components/Product';
import axios from 'axios';

export const Home = () => {

  const navigate = useNavigate()

  const { token, setProducts } = useContext(GlobalContext)

  const [productList, setProductList] = useState()

  const getProducts = () => {
    let config = {
      method: 'get',
      url: 'https://buyonic.herokuapp.com/product/',
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setProducts(response.data)
      setProductList(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    if(token === '' || token === null) {
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className='px-48 py-12'>
        <h1 className='text-gray-200 text-5xl font-semibold pb-8'>Trending Products</h1>
        <div className='grid grid-cols-3 justify-center gap-16'>
          {productList && productList.map(product => (
            <div className='col-span-1 shadow-lg'>
              <Product product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  )
}
