import React from 'react'
import Button from './home-button'
import heroImg from '../../assets/hero-img.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Hero = () => {
  return (
    <div className='relative w-full h-calc-100vh-144px'>
      <div className='absolute bottom-0 left-0 right-0 h-full bg-center bg-no-repeat bg-cover lg:bg-top' style={{ backgroundImage: `url(${heroImg})` }} />
      <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center h-full p-4 bg-black bg-opacity-50'>
        <h1 className='mt-8 text-3xl font-bold text-center text-accent sm:text-4xl md:text-5xl lg:text-6xl'>RESHAPE YOUR ROUTINE, SHAPE YOUR <span className='text-secondary'>FITNESS</span></h1>
        <p className='mt-4 text-base text-center text-accent sm:text-lg md:text-xl lg:text-2xl opacity-90'>Engaging in regular exercise not only amplifies well-being and fortifies the body but also diminishes the liklihood of injuries therby optimizing.</p>
        <div className='flex justify-center'>
          <Button type='primary'>Join Now</Button>
          <div className='flex items-center justify-center w-auto h-auto px-4 py-3 my-4 cursor-pointer text-accent hover:opacity-50'>
            <PlayCircleIcon />
            <p className='mx-2 text-lg'>Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero