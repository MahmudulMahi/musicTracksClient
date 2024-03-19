import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Recommendation from "../Pages/Recommendation/Recommendation";
import Trending from "../Pages/Trending/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/recommendation',
        element:<Recommendation></Recommendation>
      },
      {
        path:'/trending',
        element:<Trending></Trending>

      }
     
    ],

  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp></SignUp> },
]);

export default router
