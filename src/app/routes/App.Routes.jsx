import { useRoutes } from "react-router-dom";
import Home from "../screens/home/Home";
// LAYOUTS
import MainLayout from "../components/layouts/MainLayout";
import Login from "../screens/auth/login/Login";
import Register from "../screens/auth/register/Register";
import ListUsers from "../screens/listUsers/ListUsers";


export default function Router() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "listUsers", element: <ListUsers /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ]
    }
  ]);

  return element;
}
