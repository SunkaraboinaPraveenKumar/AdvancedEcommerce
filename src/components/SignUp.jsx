import React, { useState,useContext,useEffect } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const title = "Register"
const socialTitle = "Sign Up With Social Media"
const btnText = "Sign Up"
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const { signUpWithGmail, createUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrorMessage(""); // Clear the error message after 1500ms
        }, 1500);

        return () => clearTimeout(timeout); // Clear the timeout on unmount
    }, [errorMessage]);
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMsg = error.message;
                setErrorMessage("Please Provide Valid Credentials");
            });
    };
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword=form.confirmPassword.value;
        if(password!==confirmPassword){
            setErrorMessage("Password doesn't match try again!")
        }
        else{
            setErrorMessage("")
            createUser(email,password).then((userCredential)=>{
                const user=userCredential.user;
                alert("Account Created Successfully");
                navigate(from,{replace:true})
            }).catch((error)=>{
                console.error(error.message);
                alert(`${error.message}`)
            })
        }
    }
    return (
        <div>
            <div className='login-section padding-tb section-bg'>
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleSignUp}>
                            <div className='form-group'>
                                <input type="text" name="name" id="name" placeholder='Full Name' required />
                            </div>
                            <div className='form-group'>
                                <input type="email" name="email" id="email" placeholder='Email Address' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder='Password' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder=' Confirm Password' required />
                            </div>
                            {/* showing message */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className='error-message text-danger mb-1'>
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                        {/* Account bottom */}
                        <div className='account-bottom'>
                            <span className='d-block cate pt-10'>
                                Are you a Member?  <Link to="/login">Login</Link>
                            </span>
                            <span className='or'>
                                <span>or</span>
                            </span>
                            {/* social icons */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center'>
                                <li>
                                    <a className='google' onClick={handleRegister} style={{ cursor: 'pointer' }}><i className="icofont-brand-google"></i></a>
                                </li>
                                <li>
                                    <a href="/" className='facebook'><i className='icofont-facebook'></i></a>
                                </li>
                                <li>
                                    <a href="/" className='twitter'><i className='icofont-twitter'></i></a>
                                </li>
                                <li>
                                    <a href="/" className='linkedIn'><i className='icofont-linkedin'></i></a>
                                </li>
                                <li>
                                    <a href="/" className='instagram'><i className='icofont-instagram'></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp