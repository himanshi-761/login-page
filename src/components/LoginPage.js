import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../config/config'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginWithGoogle = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogin = async () => {
        if (email && password) {
            try {
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('Please enter email and password')
        }
    }

    return (
        <div className='login-container'>
            <div className='login'>
                <div className='login-text'>
                    <div className='title'>
                        The Future of <span>AI</span> is Here. Where are <span>you</span>?
                    </div>
                    <div className='sub-title'>
                        We provide the fast, high performance, code compliant AI solutions for your business.
                    </div>
                    <div className='title-btn'>
                        <div className='title-btn-text'>
                            Join Us
                        </div>
                        <svg width="22" height="22" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.293 17.297 1.414 1.414 6.707-6.707-6.707-6.707-1.414 1.414 4.293 4.293H6v2h9.586l-4.293 4.293Z"></path>
                        </svg>
                    </div>
                </div>
                <div className='login-form'>
                    {/* <div className='login-header'>
                        Login
                    </div> */}
                    <div className='form-container'>
                        <div className='login-google'
                            onClick={() => {
                                loginWithGoogle()
                            }}
                        >
                            <svg width="34" height="34" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.282 10.356h-8.326v3.45h4.791c-.445 2.194-2.313 3.454-4.791 3.454a5.27 5.27 0 0 1-5.28-5.28 5.27 5.27 0 0 1 5.28-5.28 5.17 5.17 0 0 1 3.29 1.179l2.6-2.6c-1.584-1.38-3.616-2.232-5.89-2.232a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.466 0 8.529-3.25 8.529-8.934 0-.528-.081-1.097-.203-1.625Z"></path>
                            </svg>
                            <div className='google-text'>
                                Login with Google
                            </div>
                        </div>
                        <div className='or-text'>
                            or
                        </div>
                        <div className='form-field'>
                            <input type='email' placeholder='example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-field'>
                            <input type='password' placeholder='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='login-btn'
                            onClick={() => {
                                handleLogin()
                            }}
                        >
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
