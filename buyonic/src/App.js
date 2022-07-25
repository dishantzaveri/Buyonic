import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { EditProfile } from './pages/EditProfile';
import { Home } from './pages/Home';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { MyCart } from './pages/MyCart';
import { MyWishlist } from './pages/MyWishlist';
import { OrderHistory } from './pages/OrderHistory';
import { OtpVerification } from './pages/OtpVerification';
import { ProductDetail } from './pages/ProductDetail';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';
import { Verify } from './pages/Verify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/details/:productId" element={<ProductDetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/login/verify' element={<OtpVerification />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/register/verify' element={<Verify />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/profile/edit' element={<EditProfile />}/>
        <Route path='/profile/order-history' element={<OrderHistory />}/>
        <Route path='/profile/my-cart' element={<MyCart />}/>
        <Route path='/profile/my-wishlist' element={<MyWishlist />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router> 
  );
}

export default App;
