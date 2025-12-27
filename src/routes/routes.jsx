import { createBrowserRouter } from "react-router";
import mainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router =createBrowserRouter(
    [
        {
            path:'/',
            Component:mainLayout,
            children:[
                {index:true,element:<Home></Home>},
                {path:'/category/:id',
                 element:<CategoryNews></CategoryNews> ,
                 loader:()=>fetch('/news.json')
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
        }, {
            path:'/*',
            element:<h1>ERRORRRR404</h1>
        },

    ]
)

export default router;