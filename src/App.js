import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/about",
            element: <h1>About Page</h1>,
        }
    ]);

    return (
        <div className="App">
            <Navbar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
