import React from 'react'
import SignInBg from '../../assets/sign-in-bg.jpeg'
import darkLogo from '../../assets/dark-logo.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/user/user.action'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector.js"
import { registerUser } from '../../utils/django/django.utils.js'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });
    const user = useSelector(selectCurrentUser);

    useEffect(() => {
        if (user != null) {
            navigate('/user')
        }
    }, [user])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const currentUser = await registerUser(formData.email, formData.username, formData.password);
        dispatch(setCurrentUser(currentUser));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='flex flex-col justify-center w-screen min-h-screen gap-8 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${SignInBg})` }}>
            <div className='absolute top-5 left-5'>
                <a className='' href='/'><img className='w-32 h-24' src={darkLogo} alt='logo' /></a>
            </div>
            <h1 className='text-4xl font-bold text-center lg:text-6xl text-secondary'>Create an account!!!!</h1>
            <div className='flex items-center justify-center'>
                <div className='p-8 shadow-xl bg-black/90 shadow-black/50'>
                    <h2 className='text-3xl font-bold text-center text-secondary'>Sign Up</h2>
                    <form className='flex flex-col gap-5 mt-8' onSubmit={onSubmitHandler}>
                        <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
                            <label className='text-2xl text-white '>Email</label>
                            <input className='text-xl bg-transparent border-0 border-b-2 text-white/70 focus:outline-none focus:text-white' placeholder='Enter your email' type='email' name='email' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <label className='text-2xl text-white '>Username</label>
                            <input className='text-xl bg-transparent border-0 border-b-2 text-white/70 focus:outline-none focus:text-white' placeholder='Enter your username' name='username' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <label className='text-2xl text-white '>Password</label>
                            <input className='text-xl text-black bg-transparent border-0 border-b-2 focus:outline-none focus:text-white' type='password' placeholder='Enter your password' name='password' onChange={handleChange} />
                        </div>
                        <button type='submit' className='text-secondary hover:text-white w-fit relative -right-[50%] -translate-x-1/2'>Create an account</button>
                        <p className='text-lg text-white'>Already have an account? <a href='/sign-in' className='text-secondary hover:text-white'>Sign In</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;