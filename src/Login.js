import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function Login({ onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("initialized");
        fetch('http://127.0.0.1:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.token); // Exibir o corpo da resposta
                onLogin(data.token);
                navigate("/");

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }

    return (
        <div>
            <Navbar />
            <form className="loginContainer" onSubmit={handleSubmit}>
                <div>Login page</div>
                <div className="inputContainer">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name="password"/>
                </div>
                <input className={'inputButton'} type="submit" value={'Log in'} />
            </form>
        </div>
    );
}

export default Login;