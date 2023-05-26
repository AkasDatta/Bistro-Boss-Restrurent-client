import Main from "../Layout/Main";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home> 
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        }
      ]
    },
  ]);