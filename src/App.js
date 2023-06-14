import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import Favorate from './Components/Favorate/Favorate';
import Details from './Components/Details/Details';

const router = createBrowserRouter([




  {path:'',element:<Layout/>,children:[
    {path:'home' , element:<Home/>},
    {path:'details/:id' , element:<Details/>},
    {path:'about' , element:<About/>},
    {path:'favorate' , element:<Favorate/>},
    
  ]},




])

export default function App() {
  return <>
  <RouterProvider router={router}  />
  </>

};


// const routers = createBrowserRouter ([
//   {path:'', element:<Layout/>, children:[
//     {path:'home', element:<Home/>},
//     {path:'about',element:<About/>},
//     {path:'Favorate',element:<Favorate/>},

//   ]}


// ])