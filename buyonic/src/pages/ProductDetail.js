import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { GlobalContext } from '../context/GlobalContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ProductDetail = () => {
  let { productId } = useParams();

  const { token } = useContext(GlobalContext)  

  const [product, setProduct] = useState()
  
  const [showModal1, setShowModal1] = useState(false);

  const [showModal2, setShowModal2] = useState(false);

  const [quantity, setQuantity] = useState(1)

  const [price, setPrice] = useState()

  const addToCart = () => {
    if (product) {
      let data = new FormData();
      data.append('quantity', quantity);
  
      let config = {
        method: 'post',
        url: 'https://buyonic.herokuapp.com/product/order/' + product.id,
        headers: { 
          'Authorization': 'Token ' + token, 
        },
        data : data
      };
  
      axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      setShowModal1(false)
    }
  }

  const addToFav = () => {
    if (product) {
      let data = new FormData();
      data.append('below', price);
  
      let config = {
        method: 'post',
        url: 'https://buyonic.herokuapp.com/product/notify/' + product.id,
        headers: { 
          'Authorization': 'Token ' + token,
        },
        data : data
      };
  
      axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      setShowModal2(false)
    }
  }
  
  const getProducts = () => {
    let config = {
      method: 'get',
      url: 'http://buyonic.herokuapp.com/product/details/' + productId,
      headers: { 
        'Authorization': 'Token ' + token
      }
    };
    
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getProducts()
    if (product) {
      setPrice(product.cost)
    }
  }, [])

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      {product && 
        <div className='px-64 py-16 w-full h-full'>
          <div className='w-full min-h-[600px] grid grid-cols-2 items-center justify-center gap-16 bg-gray-900 rounded-lg shadow-lg px-32 py-12'>
            <div className='col-1 flex'>
              <img className='shadow-lg max-h-80'
              src={product.photo ? 'https://buyonic.herokuapp.com' + product.photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.squareshot.co%2Fpost%2F17-types-of-product-photography-your-online-business-needs-to-know&psig=AOvVaw2iIFepP0c0t0_SFKWGNsC3&ust=1640070902850000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDZiLrq8fQCFQAAAAAdAAAAABAV'} alt=''/>
            </div>
            <div className='col-1 text-gray-200 flex flex-col justify-center space-y-2'>
              <div className='inline-flex items-end justify-between'>
                <h1 className='text-6xl font-bold'>
                  {product ? product.name : ''}
                </h1>
                <h1 className='text-xl font-semibold'>
                  {product.stock_status ? <h1 className='text-green-400'>(in stock)</h1> : <h1 className='text-red-600'>(out of stock)</h1>}
                </h1>
              </div>
              <h1 className='text-xl font-semibold'>
                Manufactured by <span className='text-green-400'>{product ? product.manufacturer.name : ''}</span>
              </h1>
              <h1 className='text-xl font-semibold'>
                Description: <span className='text-green-400'>{product ? product.description : ''}</span>
              </h1>
              <h1 className='text-xl font-semibold'>
                Category: <span className='text-green-400'>{product ? product.category.category : ''}</span>
              </h1>
              <h1 className='text-xl font-semibold'>
                Number of orders placed:  <span className='text-green-400'>{product ? product.trend : ''}</span>
              </h1>
              <h1 className='text-xl font-semibold'>
                Manufactured at:  <span className='text-green-400'>{product ? product.production_state : ''}</span>
              </h1>
              <h1 className='text-xl font-semibold'>
                Manufactured on:  <span className='text-green-400'>{product ? product.created_on : ''}</span>
              </h1>
              <h1 className='text-4xl font-bold text-green-400'>
                ₹ {product.cost && product.cost}
              </h1>
              <div className='flex justify-between items-center pt-2'>
                <div className='inline-flex items-center rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/40 bg-green-400 px-6 py-3 text-gray-800' onClick={() => setShowModal1(true)}>
                  <ShoppingCartIcon />
                  <h1 className='font-semibold text-lg pl-1'>Add to Cart</h1>
                </div>
                <div className='inline-flex items-center rounded-xl shadow-lg hover:shadow-green-400/20 bg-gray-800 px-8 py-3 text-green-400 hover:animate-bounce' onClick={() => setShowModal2(true)}>
                  <FavoriteBorderIcon />
                  <h1 className='font-semibold text-lg pl-1'>Watch</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {showModal1 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full justify-center bg-gray-800 text-gray-200 outline-none focus:outline-none min-w-[500px] py-4 px-6">
                {/*header*/}
                <div className="flex items-center justify-center py-6 rounded-t">
                  <h3 className="text-5xl font-semibold">
                    Add To Cart
                  </h3>
                </div>
                {/*body*/}
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>{product.name}</h1>
                  <h1>₹ {product.cost}</h1>
                </div>
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>Quantity</h1>
                  <input type='number' className='bg-gray-900 rounded-lg w-24' min='1' value={quantity} onChange={e => setQuantity(e.target.value)}/>
                </div>
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>Total Amount</h1>
                  <h1>₹ {quantity*product.cost}</h1>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-7 pt-8 pb-2 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-400 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg shadow-lg shadow-green-400/20 hover:shadow-green-400/40 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => addToCart()}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModal2 ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full justify-center bg-gray-800 text-gray-200 outline-none focus:outline-none min-w-[500px] py-4 px-6">
                {/*header*/}
                <div className="flex items-center justify-center py-6 rounded-t">
                  <h3 className="text-5xl font-semibold">
                    Watch this Product
                  </h3>
                </div>
                {/*body*/}
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>{product.name}</h1>
                  <h1>₹ {product.cost}</h1>
                </div>
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>Price</h1>
                  <input type='number' className='bg-gray-900 rounded-lg w-24' min='1' value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-7 pt-8 pb-2 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal2(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-400 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg shadow-lg shadow-green-400/20 hover:shadow-green-400/40 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => addToFav()}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
