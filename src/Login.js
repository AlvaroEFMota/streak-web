import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Login({ onLogin}) {
    const api_url = useSelector((state) => state.api_url);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log("working", api_url);

    const handleSignIn = () => {
        navigate("/signin");
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("initialized");
        fetch(api_url + '/login', {
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
            <form className="loginContainer" onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
                    <h2>Login page</h2>
                </div>
                <div className="inputContainer">
                    <div>
                        <label htmlFor="email"><h4>Email</h4></label>
                    </div>
                    <input className={'top_m10'} value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                </div>
                <div className="inputContainer">
                    <div>
                        <label htmlFor="password"><h4>password</h4></label>
                    </div>
                    <input className={'top_m10'} value={password} onChange={(e) => setPassword(e.target.value)} name="password"/>
                </div>
                <input className={'inputButton top_m15'} type="submit" value={'Log in'} />
                <input className={'inputButton top_m15'} type="button" value={'Sign in'} onClick={(e) => handleSignIn(e)}/>
            </form>
        </div>
    );
}

export default Login;
