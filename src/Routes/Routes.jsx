import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import MainLayouts from '../Layouts/MainLayouts'
import Favorite from '../Pages/Favorite'
import About from '../Pages/About'
import PhoneDetails from '../Pages/PhoneDetails'
import ErrorPage from '../Pages/ErrorPage'

export const router = createBrowserRouter([
    {
      path:'/',
      Component:MainLayouts,
      errorElement:ErrorPage,
      children:[
        {
          path:'/',
          hydrateFallbackElement:<p>Loading...</p>,
          loader:()=>fetch('../phones.json'), // (../) for fetching fake data from public folder  
          Component:Home,
        },
        {
          path:'/favorite',
          Component:Favorite,
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'/phone-details/:id',
          hydrateFallbackElement:<p>Loading...</p>,
          loader:()=>fetch('../phones.json'), // (../) for fetching fake data from public folder  
          Component:PhoneDetails
        }

      ]
      
    }
  ])