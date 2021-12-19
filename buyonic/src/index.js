import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalProvider from './context/GlobalContext'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
