import { createBrowserRouter } from "react-router";
import mainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import CategoryNews from "../components/CategoryNews";

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
            element:<h1>auth layout</h1>
        }, {
            path:'/*',
            element:<h1>ERRORRRR404</h1>
        },

    ]
)

export default router;