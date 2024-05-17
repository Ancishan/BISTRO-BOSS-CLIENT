import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ContactUs from "../Page/Path/ContactUs";
import DashBoard from "../Page/Path/DashBoard";
import OurShop from "../Page/Path/OurShop";
import Menu from "../Page/Path/Menu";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'contact',
            element:<ContactUs></ContactUs>,
        },
        {
            path:'/dashboard',
            element: <DashBoard></DashBoard>,
        },
        {
            path:'/ourshop',
            element:<OurShop></OurShop> ,
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        }
      ]
    },
  ]);