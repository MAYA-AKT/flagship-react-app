import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import CartProvider from './Providers/CartProvider.jsx'
import  { Toaster } from 'react-hot-toast';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} >
         <Toaster/>
      </RouterProvider>
    </CartProvider>
  </StrictMode>,
)
