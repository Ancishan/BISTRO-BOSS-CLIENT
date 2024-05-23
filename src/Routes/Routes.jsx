import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import ContactUs from "../Page/Path/ContactUs";
import OurShop from "../Page/Path/OurShop";
import Menu from "../Page/Path/Menu";
import Login from "../Page/Authentication/Login";
import SignUp from "../Page/Authentication/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Page/DashBoard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/DashBoard/AllUsers";



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
            path:'/ourshop/:category',
            element:<OurShop></OurShop> ,
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>,
        }
      ]
    },

    {
      path:'dashboard',
      element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // Admin routes
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        }
      ]
    },
  ]);