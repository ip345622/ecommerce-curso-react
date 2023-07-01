import { createBrowserRouter } from "react-router-dom";
import Arcercade from "../acercade";
import App from "../App";
import Navbar from "../components/navbar";

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Navbar />,
        children:[
            {
                path:"",
                element: <App />
            },
            {
                path:"acercade",
                element: <Arcercade />
            }
        ]
    },
    {
        path:"*",
        element:<h1>Error, no existe la pagina</h1>
    }
])