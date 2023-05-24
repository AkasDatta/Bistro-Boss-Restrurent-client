import Main from "../Layout/Main";
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home> 
        }
      ]
    },
  ]);