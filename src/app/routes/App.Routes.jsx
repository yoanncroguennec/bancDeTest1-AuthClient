import { useRoutes } from "react-router-dom";
import Home_API_Restaurants from "../components/common/home/api_restaurants/Home_API_Restaurants";
// LAYOUTS
import MainLayout from "../components/layouts/MainLayout";
import Login from "../screens/auth/login/Login";
import Register from "../screens/auth/register/Register";
// SCREENS
import Home from "../screens/home/Home";



export default function Router() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/restaurants", element: <Home_API_Restaurants /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },

      ]
    }
  ]);

  return element;
}
