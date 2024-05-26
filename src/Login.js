import { useState, useEffect } from "react";
import Navbar from './Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function Login() {

    return (
        <div>
            <Navbar />
            <h1>Login page</h1>
        </div>
    );
}

export default Login;
