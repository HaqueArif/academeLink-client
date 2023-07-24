import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Home/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'college',
          element: <Colleges></Colleges>
        },
        {
          path:'admission',
          element: <Admission></Admission>
        },
        {
          path:'myCollege',
          element: <PrivateRoutes><MyCollege></MyCollege></PrivateRoutes>
        },
        {
          path: 'collegeDetails/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params})=> fetch(`https://academe-link-server-site.vercel.app/colleges/${params.id}`)
        },
        {
          path:'admission/:id',
          element: <PrivateRoutes><AdmissionForm></AdmissionForm></PrivateRoutes>,
          loader: ({params})=> fetch(`https://academe-link-server-site.vercel.app/colleges/${params.id}`)
        },
        {
          path: 'profile',
          element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
        
      ]
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    }
    
  ]);