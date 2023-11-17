import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/400.css"; // Specify weight
import "@fontsource/lato/400-italic.css"; // Specify weight and style

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
