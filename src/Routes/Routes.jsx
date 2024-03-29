import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Recommendation from "../Pages/Recommendation/Recommendation";
import Trending from "../Pages/Trending/Trending";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element:<PrivateRoute><Recommendation></Recommendation></PrivateRoute>
      },
      {
        path:'/trending',
        element:<PrivateRoute><Trending></Trending></PrivateRoute>

      }
     
    ],

  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp></SignUp> },
]);

export default router
