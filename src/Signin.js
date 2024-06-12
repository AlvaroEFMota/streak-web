import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const Signin = () => {
    const api_url = useSelector((state) => state.api_url);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
         fetch(api_url + '/user', {
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
                navigate("/login");
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div>
                    <label htmlFor="email"><h4>Email</h4></label>
                </div>
                <input className={'top_m10'} value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>
                <div>
                    <label htmlFor="password"><h4>password</h4></label>
                </div>
                <div>
                    <input className={'top_m10'} value={password} onChange={(e) => setPassword(e.target.value)} name="password"/>
                </div>
                <input type="submit" value="Criar conta"/>
            </form>
        </div>
    )

}

export default Signin;
