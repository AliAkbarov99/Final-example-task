import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home'
import Add from '../Pages/Add/Add'
import MainRoot from '../Pages/MainRoot'

export const Routes = createBrowserRouter([
    {
        path:"",
        element:<MainRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/add",
                element:<Add/>
            }
        ]
    }
])

export default Routes