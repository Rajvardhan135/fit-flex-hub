import { useState } from 'react'
import React, { useEffect } from 'react'
import darkLogo from '../../assets/dark-logo.png'
import { Menu, Close } from '@mui/icons-material'
import '../../styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector"
import { setCurrentUser } from '../../store/user/user.action'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UserNav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false)
    const user = useSelector(selectCurrentUser)
    const onOpenMneuHandler = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    const onLogout = () => {
        dispatch(setCurrentUser(null));
        navigate('/')
    }

    return (
        <>
            <div className='flex items-center justify-between m-8 transition-all cursor-pointer text-accent hover:opacity-50' onClick={onOpenMneuHandler}>
                <Menu sx={{ fontSize: 40, color: 'white' }} />
                <div className=''>
                    <a className='' href='/'><img className='w-24 h-16' src={darkLogo} alt='logo' /></a>
                </div>
            </div>
            <div className={`${!openMenu && '-translate-x-[100%]'} flex fixed top-0 flex-col h-screen bg-[#1a1a1a] shadow-lg gap-8 w-[200px] justify-center items-start p-2 transition-all duration-300 z-50`}>
                <div className='absolute cursor-pointer right-4 top-2' onClick={onOpenMneuHandler}>
                    <Close sx={{ fontSize: 40, color: 'white' }} />
                </div>
                <a href='/user' className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary'>Dashboard</a>
                <a href='/user/explore' className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary'>Explore Workouts</a>
                <a href='/user/saved' className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary'>Saved Workouts</a>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={onLogout}>Logout</p>
            </div>
            <Outlet />
        </>
    )
}

export default UserNav 