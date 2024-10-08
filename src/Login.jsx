import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

const Login = () => {
    const navigateTo = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            navigateTo('/')
        })
    }

    const register = (e) => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);

                if(auth){
                    navigateTo('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='' />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setemail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setpassword(e.target.value)} />

                    <button onClick={signIn}
                        type='submit' className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
