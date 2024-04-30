import { useState } from 'react'
import React, { useEffect } from 'react'
import darkLogo from '../../assets/dark-logo.png'
import { Menu } from '@mui/icons-material'
import '../../styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector"
import { setCurrentUser } from '../../store/user/user.action'

const HomeNav = () => {
    const dispatch = useDispatch()
    const [openMenu, setOpenMenu] = useState(false)
    const user = useSelector(selectCurrentUser)
    const onOpenMneuHandler = () => {
        setOpenMenu(!openMenu);
    }

    useEffect(() => {
        console.log(user);
    }, [user])

    const onClickHandler = (id) => {
        const sectionId = document.getElementById(id);
        if (sectionId) {
            sectionId.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const onLogout = () => {
        dispatch(setCurrentUser(null));
    }

    return (
        <div className='bg-[#1A1A1A] h-[144px] flex items-center justify-between lg:justify-around p-6'>

            <div className=''>
                <a className='' href='/'><img className='w-32 h-24' src={darkLogo} alt='logo' /></a>
            </div>
            <div className='lg:order-3'>
                <div className='transition-all cursor-pointer text-accent hover:opacity-50 lg:hidden' onClick={onOpenMneuHandler}>
                    <Menu sx={{ fontSize: 40, color: 'white' }} />
                </div>
                {user ? <p className='hidden text-2xl font-bold transition-all duration-300 cursor-pointer text-secondary hover:text-accent lg:inline' onClick={onLogout}>Logout</p> : <a href='/sign-in' className='hidden text-2xl font-bold transition-all duration-300 text-secondary hover:text-accent lg:inline'>Sign-in</a>}
            </div>
            <div className={`absolute bottom-0 w-full lg:w-auto  top-[144px] bg-[#1A1A1A] left-0 flex flex-col justify-center lg:items-start lg:static items-center gap-12 top lg:flex-row lg:order-2 transition-all duration-500 delay-75  ${openMenu ? 'translate-x-0' : '-translate-x-[100%]'} lg:translate-x-0 z-50`}>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={() => { onClickHandler('classes') }}>CLASSES</p>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={() => { onClickHandler('trainers') }}>TRAINERS</p>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={() => { onClickHandler('pricing') }}>PRICING</p>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={() => { onClickHandler('testimonial') }}>TESTIMONIAL</p>
                <p className='text-xl transition-all duration-300 cursor-pointer text-accent hover:text-secondary' onClick={() => { onClickHandler('contact') }}>CONTACT</p>
                {user ? <p className='inline text-2xl font-bold transition-all duration-300 cursor-pointer text-secondary hover:text-accent lg:hidden' onClick={onLogout}>Logout</p> : <a href='/sign-in' className='inline text-2xl font-bold transition-all duration-300 text-secondary hover:text-accent lg:hidden'>Sign-in</a>}
            </div>
        </div>
    )
}

export default HomeNav