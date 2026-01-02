import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loding from "../components/common/Loding";

const router =createBrowserRouter(
    [
        {
            path:'/',
            Component:MainLayout,
            children:[
                {path:'/',element:<Navigate to="/category/0" replace />},
                {path:'/category/:id',
                 element:<CategoryNews></CategoryNews> ,
                 loader: async()=>{
                    const res = await fetch('/news.json');
                    const data = await res.json();
                    return data;
                 },
                 hydrateFallbackElement:<Loding></Loding>
                }
            ]
        },
         {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {path: '/auth/login',element:<Login></Login>},
                {path:'/auth/register',element:<Register></Register>}
            ]
        }, 
        {
          path:'/news-details/:id',
                 loader: async () => {
    const res = await fetch('/news.json');
    const data = await res.json();
    return data; // array of news
  },
   hydrateFallbackElement:<Loding></Loding>,
  element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
        },
        {
            path:'/*',
            element:<h1>ERRORRRR404</h1>
        },

    ]
)

export default router;