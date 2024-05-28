import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("useEffect token content:", token);
        if(token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, [])

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    }

    if (isLoading) {
        return <div> Loading... </div>;
    }

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
            element: <Login onLogin={handleLogin}/>,
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
