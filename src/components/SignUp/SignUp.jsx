import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import signUpGoogle from '../../assets/google.png';
import { AuthContext } from '../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {

    const { createUser, setUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;

        setError('')
        if (password !== confirm) {
            setError('Password did not match')
            return
        }
        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate('/')
                handleName(result.user, name)
            })
            .catch(error => {
                setError(error.message)
            })

    }

    

    const handleName = (user, name) => {
        updateProfile(user, {
            displayName : name
        })
        .then(()=>{
            console.log('user name updated')
        })
        .catch(error => {
            setError(error.message)
        })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <div className='btn form-control'>
                    <input className='' type="submit" value="Login" name="" id="" />
                </div>
                <h4 className='form-link'>Already have an account? <Link className='login' to="/login">Login</Link></h4>
                <p><small>{error}</small></p>
            </form>
        </div>
    );
};

export default SignUp;