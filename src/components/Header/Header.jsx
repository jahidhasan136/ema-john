import React, { useContext, useState } from 'react';
import './Header.css';
import userlogo from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    console.log(user)

    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }


    const [image, setImage] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    

    return (
        <nav className='header'>
            <h2>Goals & Objective</h2>
            <div className='header-link'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <div className='user'>
                    <div className="dropdown">
                    <div>
            <div
                onClick={() => {
                    document.getElementById("image-input").click();
                }}
                style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    textAlign: "center",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    placeItems: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "#ccc",
                    cursor: "pointer",
                    marginBottom: "20px"
                }}
            >
                {image ? (
                    <img src={image} alt="uploaded image" style={{ maxWidth: "45px", maxHeight: "45px" }} />
                ) : (
                    <img src={userlogo} />
                )}
            </div>
            <input id="image-input" type="file" style={{ display: "none" }} onChange={handleFileInputChange} />
        </div>
                        <div className="dropdown-content">
                            {
                                user === null ? '' : <h4>Name: {user?.displayName}</h4>
                            }
                            {
                                user && <h4>Email: {user.email}</h4>
                            }
                        </div>
                    </div>
                    {
                        user ? <Link onClick={handleSingOut} to="/login"><button>Log out</button></Link> :
                            ''
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