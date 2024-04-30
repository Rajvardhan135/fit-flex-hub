import React from 'react'
import Button from './home-button'
import consultancyImg from '../../assets/consultancy.png'

const Consultancy = () => {
    return (
        <div className='w-full min-h-[300px] flex justify-center items-center bg-no-repeat bg-cover bg-center bg-opacity-30 transition-all duration-500 ease-in-out' style={{ backgroundImage: `url(${consultancyImg})` }}>
            <Button type='primary'>Join Membership</Button>
        </div>
    )
}

export default Consultancy