import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto p-1'>
    <React.StrictMode>
    
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    
    </React.StrictMode>
  </div>
)
