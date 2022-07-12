import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';

import axios from './API/axios';
const LOGIN_URL = '/v1/api/login';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const { state, dispatch } = useContext(AuthContext)

    console.log(state);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            // console.log(email, password);
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredential: true
                }
            );
            // console.log(response.data);
            const token = response.data.token;
            const user_id = response.data.user_id;
            const role = response.data.role;
            const data = { user_id, role, token }
            dispatch({ type: "LOGIN", payload: data })
            setEmail('')
            setPassword('')
            setSuccess(true)
        }
        catch (err) {

        }

    }

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    return (
        <>
            {
                success ? <section>
                    < h1 > You are successfully login</h1 >
                    <p>Go to <a href="home">Home</a></p>
                </section > :
                    <section>
                        {
                            errMsg && <p>{errMsg}</p>
                        }
                        <h1>Sign In</h1>
                        <form onSubmit={onSubmit}>
                            <input placeholder='email' autoComplete='off' type="email" onChange={handleEmailChange} required />
                            <input placeholder='password' type="password" onChange={handlePasswordChange} required />
                            <input type="submit" value="Login" />
                        </form>
                        <p>Need an account? <a href="#g">Sign Up</a></p>
                    </section>

            }</>
    );
};



export default LoginPage;
