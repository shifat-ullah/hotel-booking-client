import {
    createBrowserRouter,
    
  } from "react-router-dom";
 
import Main from "../layout/Main";
import Home from "../components/home/home/Home";
import LogIn from "../components/page/login/LogIn";
import SignUp from "../components/page/signup/SignUp";
import RoomDetails from "../components/roomsDetails/RoomDetails";
import PrivateRouters from "./PrivateRouters";
import Rooms from "../components/rooms/Rooms";
import DashboardLayout from "../layout/DashboardLayout";
import AddRoom from "../components/dashboard/addRoom/AddRoom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/room",
          element: <Rooms></Rooms>
        },
        {
          path: "/roomsDetails/:id",
          element: <PrivateRouters><RoomDetails></RoomDetails></PrivateRouters>,
          loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
        },
       
      ],
    },

    // dashboard router
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'/dashboard/add-room',
          element:<AddRoom></AddRoom>
        }
      ]
    },

    //////////////////////////////////

    {
      path:'/login',
      element:<LogIn></LogIn>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    }
  ]);