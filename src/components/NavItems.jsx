import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import { AuthContext } from '../contexts/AuthProvider';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    const { user, logOut } = useContext(AuthContext); // Access user and logOut from AuthContext

    const handleLogout = () => {
        logOut();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* Header top start */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        {user ? (
                            <div className='header-top-area'>
                                <Link to='/cart-page' className='lab-btn me-3'><span>Cart</span></Link>
                                <Link><button onClick={handleLogout} className='lab-btn'>Logout</button></Link>
                            </div>
                        ) : (
                            <div className='d-flex-lg'>
                                <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                                <Link to='/login'>Log In</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* header bottom */}
            <div className='header-bottom'>
                <div className='header-wrapper'>
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"} >
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        {/* sign in and log in */}
                        {user ? (
                            <>
                                <Link to='/cart-page' className='lab-btn me-3 d-none d-md-block'><span>Cart</span></Link>
                                <Link><button onClick={handleLogout} className='lab-btn d-none d-md-block'>Logout</button></Link>
                            </>
                        ) : (
                            <>
                                <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'>
                                    Create Account
                                </Link>
                                <Link to="/login" className='d-none d-md-block'>Log In</Link>
                            </>
                        )}
                        {/* menu toggler */}
                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* social Toggler */}
                        <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavItems;
