import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/error";
import Movie from "./pages/movie/movie";
import BookMark from "./pages/bookmark/bookMark";

export const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>
    },
    {
        path:"/movies",
        element:<Movie/>,
        errorElement:<Error/>
    },
    {
        path:"/bookmark",
        element:<BookMark/>,
        errorElement:<Error/>
    }
])