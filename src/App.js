import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import About from './About';
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom';


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
    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setIsLoading(false);
    }

    if (isLoading) {
        return <div> Loading... </div>;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar onLogout={handleLogout} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute isAuthenticated={isAuthenticated}>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
