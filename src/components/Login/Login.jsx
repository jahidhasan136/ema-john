import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { AuthContext } from '../Providers/AuthProviders';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';

const Login = () => {

    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const { logIn, setUser } = useContext(AuthContext)
    const auth = getAuth()
    const emailRef = useRef()
    const navigate = useNavigate()

    const signIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleResetPassword = event => {
        const email = emailRef.current.value
        if(!email){
            alert('Please provide your email address to reset password')
        }
        sendPasswordResetEmail(auth, email)
        .then(()=> {
            alert('Please check your email')
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={signIn}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} type="email" name="email" id="" />
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
                <p><small>Forget Password? Please <a className='reset' onClick={handleResetPassword} href='#'>Reset password</a></small></p>
                <h4 className='form-link'>New to Ema-Joh? <Link className='signup-link' to="/signup">Create New Accout</Link></h4>
                <p><small>{error}</small></p>
            </form>
        </div>
    );
};

export default Login;