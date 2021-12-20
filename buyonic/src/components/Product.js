import { useContext } from 'react'
import { 
  CardActionArea,
  Card,
  CardContent,
} from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Product = ({product}) => {

  return (
    <div className="">
      {product ? 
        <Card sx={{ width: '100%', background: '#111827', color: 'white' }}>
          <CardActionArea>
            <div className='bg-gray-500 flex justify-center'>
              <img 
                src={product.photo ? 'https://buyonic.herokuapp.com' + product.photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.squareshot.co%2Fpost%2F17-types-of-product-photography-your-online-business-needs-to-know&psig=AOvVaw2iIFepP0c0t0_SFKWGNsC3&ust=1640070902850000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDZiLrq8fQCFQAAAAAdAAAAABAV'}
                alt=''
                className='h-44'
              />
            </div>
            <CardContent>
              <div className='px-4'>
                <h1 className='text-4xl font-bold text-gray-200'>
                  {product.name && product.name}
                </h1>
                <h1 className=' text-sm pb-1 text-gray-400'>
                  by {product.manufacturer.name && product.manufacturer.name}
                </h1>
                <h1 className='pb-1'>
                  Info: <span className='text-green-400'>{product.description && product.description}</span>
                </h1>
                <h1 className='pb-1'>
                  Sold: <span className='text-green-400'>{product.trend && product.trend}</span>
                </h1>
                <h1 className='pb-1 text-4xl font-bold'>
                  ₹ <span className=''>{product.cost && product.cost}</span>
                </h1>
                <div className='flex justify-between items-center pt-4'>
                  <div className='inline-flex items-center rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/40 bg-green-400 px-2 py-2 text-gray-800'>
                    <ShoppingCartIcon />
                    <h1 className='font-semibold text-lg pl-1'>Add to Cart</h1>
                  </div>
                  <div className='inline-flex items-center rounded-xl shadow-lg hover:shadow-green-400/20 bg-gray-800 px-2 py-2 text-green-400 hover:animate-bounce'>
                    <FavoriteBorderIcon />
                    <h1 className='font-semibold text-lg pl-1'>Watch</h1>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card> :
        <div></div>
      }
    </div>
  )
}