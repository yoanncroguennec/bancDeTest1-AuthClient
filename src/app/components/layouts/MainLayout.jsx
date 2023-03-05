import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './navbar/Index';



export default function MainLayout() {
 

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}