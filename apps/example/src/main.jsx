import React from 'react'

import ReactDOM from 'react-dom/client'

import GlobalStyles from '~/styles/GlobalStyles.jsx'
import App from '~/App.jsx'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
