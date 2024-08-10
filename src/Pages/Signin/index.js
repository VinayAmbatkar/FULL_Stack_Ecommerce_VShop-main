import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import GoogleImg from '../../assets/images/google.png';

const SignIn = () => {

    // My context 
    const context = React.useContext(MyContext);
    
    // State to toggle between Sign In and Sign Up
    const [isSignIn, setIsSignIn] = useState(true);
    
    useEffect(() => {
        context.setIsHeaderFooterShow(true);
    }, []);

    return (
        <section className="section signInPage">
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <form className='mt-2'>
                        <h2 className='mb-3'>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

                        {!isSignIn && (
                            <div className="form-group">
                                <TextField
                                    id="signup-name"
                                    label="Full Name"
                                    required
                                    placeholder="Enter Your Name"
                                    variant="standard"
                                    type='text'
                                    className="w-100"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <TextField
                                id={isSignIn ? "standard-email" : "signup-email"}
                                label="Email"
                                required
                                placeholder="Enter Your Email"
                                variant="standard"
                                type='email'
                                className="w-100"
                            />
                        </div>
                        <div className="form-group">
                            <TextField
                                id={isSignIn ? "standard-password" : "signup-password"}
                                label="Password"
                                required
                                placeholder="Enter Your Password"
                                variant="standard"
                                type='password'
                                className="w-100"
                            />
                        </div>

                        {!isSignIn && (
                            <div className="form-group">
                                <TextField
                                    id="signup-confirm-password"
                                    label="Confirm Password"
                                    required
                                    placeholder="Confirm Your Password"
                                    variant="standard"
                                    type='password'
                                    className="w-100"
                                />
                            </div>
                        )}

                        {isSignIn && (
                            <a className='border-effect cursor txt'>Forgot Password</a>
                        )}

                        <div className="d-flex align-items-center mt-3 mb-3">
                            <Button className='btn-blue btn-lg btn-big col' variant='outlined'>
                                {isSignIn ? 'Sign In' : 'Sign Up'}
                            </Button>
                            <Link to="/">
                                <Button className='btn-lg btn-big col ml-3' variant='outlined' onClick={() => context.setIsHeaderFooterShow(true)}>Cancel</Button>
                            </Link>
                        </div>

                        <p className='txt mt-3 text-center'>
                            {isSignIn ? (
                                <>
                                    Don't have an account? 
                                    <span className='border-effect cursor' onClick={() => setIsSignIn(false)}> Sign Up</span>
                                </>
                            ) : (
                                <>
                                    Already have an account? 
                                    <span className='border-effect cursor' onClick={() => setIsSignIn(true)}> Sign In</span>
                                </>
                            )}
                        </p>

                        <h6 className='mt-3 text-center font-weight-bold'>Or Continue With Social Media</h6>
                        <Button className='loginWithGoogle mt-2' variant='outlined'>
                            <img src={GoogleImg} alt={isSignIn ? "Sign In with Google" : "Sign Up with Google"} />
                            {isSignIn ? 'Sign In With Google' : 'Sign Up With Google'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
