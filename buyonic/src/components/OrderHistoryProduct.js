import { useContext, useState } from 'react'
import { 
  CardActionArea,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const OrderHistoryProduct = ({ product }) => {

  const { token } = useContext(GlobalContext)

  const [showModal1, setShowModal1] = useState(false);

  const [showModal2, setShowModal2] = useState(false);

  const [quantity, setQuantity] = useState(1)

  const [price, setPrice] = useState(product.product.cost)

  const addToCart = () => {
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

  const addToFav = () => {
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

  return (
    <div className="">
      {product ? 
        <Card sx={{ width: '100%', background: '#111827', color: 'white' }}>
          <CardActionArea>
            <Link to={`/details/${product.product.id}`} key={product.product.id}>
              <div className='bg-gray-500 flex justify-center'>
                <img 
                  src={product.product.photo && 'https://buyonic.herokuapp.com' + product.product.photo}
                  alt='' className='h-44'
                />
              </div>
              <CardContent>
                <div className='px-4 min-h-[180px]'>
                  <h1 className='text-4xl font-bold text-gray-200'>
                    {product.product.name && product.product.name}
                  </h1>
                  <h1 className=' text-sm pb-1 text-gray-400'>
                    by {product.product.manufacturer.name && product.product.manufacturer.name}
                  </h1>
                  <h1 className='pb-1'>
                    Info: <span className='text-green-400'>{product.product.description && product.product.description}</span>
                  </h1>
                  <h1 className='pb-1'>
                    Quantity: <span className='text-green-400'>{product.quantity && product.quantity}</span>
                  </h1>
                  <div className='inline-block bg-green-400 px-3 py-1 rounded-full text-gray-900 mt-3'>
                    <h1>{product.product.category.category && product.product.category.category}</h1>
                  </div>
                </div>
              </CardContent>
            </Link>
          </CardActionArea>
          <CardActions disableSpacing>
            <div className='flex justify-between items-center pb-4'>
              <div className='inline-flex items-center rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/40 bg-green-400 px-3 py-2 text-gray-800 ml-6' onClick={() => setShowModal1(true)} >
                <ShoppingCartIcon />
                <h1 className='font-semibold text-lg pl-1'>Add to Cart</h1>
              </div>
              <div className='inline-flex items-center rounded-xl shadow-lg hover:shadow-green-400/20 bg-gray-800 px-3 py-2 text-green-400 hover:animate-bounce ml-12' onClick={() => setShowModal2(true)} >
                <FavoriteBorderIcon />
                <h1 className='font-semibold text-lg pl-1'>Watch</h1>
              </div>
            </div>
          </CardActions>
        </Card> :
        <div></div>
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
                  <h1>{product.product.name}</h1>
                  <h1>₹ {product.product.cost}</h1>
                </div>
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>Quantity</h1>
                  <input type='number' className='bg-gray-900 rounded-lg w-24' min='1' value={quantity} onChange={e => setQuantity(e.target.value)}/>
                </div>
                <div className="pt-6 inline-flex justify-between items-center spacing-x-8 text-3xl px-8">
                  <h1>Total Amount</h1>
                  <h1>₹ {quantity*product.product.cost}</h1>
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
                  <h1>{product.product.name}</h1>
                  <h1>₹ {product.product.cost}</h1>
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