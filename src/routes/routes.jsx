import { createBrowserRouter } from "react-router";
import mainLayout from "../layout/mainLayout";

const router =createBrowserRouter(
    [
        {
            path:'/',
            Component:mainLayout
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