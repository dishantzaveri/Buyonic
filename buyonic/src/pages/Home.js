import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import logo from '../utils/logo.svg';
import {
  Link
} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { Product } from '../components/Product';
import axios from 'axios';

export const Home = () => {

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
    getProducts()
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className='px-48 py-16 grid grid-cols-3 justify-center gap-x-16'>
        {productList && productList.map(product => (
          <div className='col-span-1 shadow-lg'>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
