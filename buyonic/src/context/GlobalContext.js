import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [user, setUser] = useState();

  const [products, setProducts] = useState();

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  const values = {
    token: token,
    setToken: setToken,
    user: user,
    setUser: setUser,
    products: products,
    setProducts: setProducts,
  }

  return(
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;