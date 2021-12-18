import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { LoginSample } from './sample/LoginSample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/login-sample' element={<LoginSample />}/>
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
