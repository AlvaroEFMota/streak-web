import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import About from './About';
import Signin from './Signin';
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { setApiUrl } from "./state/environment/environmentSlice";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const api_url = process.env.API_URL;
    if (api_url) {
        dispatch(setApiUrl(api_url));
    }

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
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
