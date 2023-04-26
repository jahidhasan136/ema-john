import React, { useContext } from 'react';
import './Header.css';
import userlogo from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }

    return (
        <nav className='header'>
            <h2>Goals & Objective</h2>
            <div className='header-link'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <div className='user'>
                    <img src={userlogo} alt="" />
                    {
                        user ? <Link onClick={handleSingOut} to="/login"><button>Log out</button></Link> :
                            <Link to="/login"><button>Login</button></Link>
                    }
                    {
                        user ? null : <Link to="/signup"><button>Signup</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;