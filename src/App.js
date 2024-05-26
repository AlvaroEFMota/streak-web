import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            setIsAuthenticated(true);
        }
    })

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Home />
                </ProtectedRoute>
            ),

            errorElement: <h1>Error</h1>,
        },
        {
            path: "/about",
            element: <Navbar />,
        },
        {
            path: "/login",
            element: <Login />,
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
