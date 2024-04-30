import React from 'react'
import darkLogo from '../../assets/dark-logo.png'
import { Instagram, Facebook, Twitter, LinkedIn, YouTube, Phone, Email, LocationOnOutlined } from '@mui/icons-material'

const Footer = () => {
    return (
        <div className='px-5 pt-12 pb-8 sm:px-24 lg:px-32' id='contact'>
            <div className='flex flex-col items-start gap-8 md:gap-12 md:justify-between md:flex-row text-accent'>
                <div className='max-w-[30%]'>
                    <div className='mb-3'>
                        <a className='' href='/'><img className='w-32 h-24' src={darkLogo} alt='logo' /></a>
                    </div>
                    <p className='text-sm text-accent'>A gym also known as a fitness partner or health club, is a facility dedicated to physical fitness ans exercise</p>
                    <div className='flex gap-2'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <LinkedIn />
                        <YouTube />
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Company</p>
                    <p className='text-sm text-accent'>Home</p>
                    <p className='text-sm text-accent'>About us</p>
                    <p className='text-sm text-accent'>Classes</p>
                    <p className='text-sm text-accent'>Trainers</p>
                    <p className='text-sm text-accent'>Pricing</p>
                </div>
                <div>
                    <p className='font-semibold'>Category</p>
                    <p className='text-sm text-accent'>Strength Training</p>
                    <p className='text-sm text-accent'>Weight Loss</p>
                    <p className='text-sm text-accent'>Body Building</p>
                    <p className='text-sm text-accent'>Basic Yoga</p>
                    <p className='text-sm text-accent'>Physical Fitness</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='font-semibold'>Contact Us</p>
                    <div className='flex'>
                        <Phone />
                        <p className='text-sm text-accent'>+1 237-345-907</p>
                    </div>
                    <div className='flex'>
                        <Email />
                        <p className='text-sm text-accent'>info@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <LocationOnOutlined />
                        <p className='text-sm text-accent'>5409 Goff Avenue Michigan, Grand Rapids, USA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;