import React from 'react'
import { Link, Outlet } from "react-router-dom";



export default function MainLayout() {
 

  return (
    <>
      <h1>Navbar</h1>
      <Link to="login"><h4>Login</h4></Link>
      <Link to="register"><h4>Register</h4></Link>
      <Outlet />
    </>
  );
}