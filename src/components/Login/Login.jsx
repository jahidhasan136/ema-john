import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const {logIn, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const location = useLocation()
    
    const from = location.state?.from?.pathname

    const signIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        setError('')
        logIn(email, password)
        .then(result => {
            const loggedUser = result.user
            setUser(loggedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error.message)
            setError(error.message)
        })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={signIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>
                </div>
                <div className='btn form-control'>
                    <input className='' type="submit" value="Login" name="" id="" />
                </div>
                <h4 className='form-link'>New to Ema-Joh? <Link className='signup-link' to="/signup">Create New Accout</Link></h4>
                <p><small>{error}</small></p>
                <div className='horizontal-x'>
                    <div className='border'></div>
                    <h4>Or</h4>
                    <div className='border'></div>
                </div>
                <div className='google-auth'>
                    <img src={google} alt="" />
                    <p>Continue with Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;