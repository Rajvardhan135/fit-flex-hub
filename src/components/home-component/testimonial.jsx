import React, { useEffect, useState } from 'react'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material'

import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.png'
import testimonial3 from '../../assets/testimonial3.png'
import TestimonialCard from './testimonialCard'

const testimonials = [
    {
        image: testimonial1,
        testimonial: "These fitness classes are a game-changer! The dynamic workouts, motivating instructors, and supportive community have not only helped me reach my goals but also made every session enjoyable. I feel more energized and confident than ever!",
        name: 'Jonathon Edward',
        profession: 'Athlete'
    },
    {
        image: testimonial2,
        testimonial: "JBeing a part of these fitness classes transformed my approach to health. Expert trainers, positive vibes, and challenging workouts create a supportive environment. Proud to be part of a community prioritizing both physical and mental well-being.",
        name: 'Jonathon Edward',
        profession: 'Athlete'
    },
    {
        image: testimonial3,
        testimonial: "Exceeded expectations! The variety of workouts and personalized guidance from dedicated instructors helped me push my limits. The camaraderie among participants makes each class feel like a shared journey towards a healthier, stronger me.",
        name: 'Jonathon Edward',
        profession: 'Athlete'
    }
]

const Testimonial = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [counter, setCounter] = useState(0);

    const nextTestimonial = () => {
        setCounter(counter + 1);
    }
    const prevTestimonial = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        setTestimonialIndex(Math.abs(counter % testimonials.length))
    }, [counter])

    return (
        <div className='flex flex-col min-h-screen gap-8 px-5 py-24 bg-black sm:px-24 lg:px-32' id='testimonial'>
            <div className='flex flex-col items-center justify-between sm:flex-row'>
                <div>
                    <p className='tracking-widest text-center sm:text-left text-accent text:lg md:text-xl xl:text-3xl lg:text-2xl '>TESTIMONIAL</p>
                    <h2 className='mb-4 text-4xl font-bold text-center sm:text-left lg:text-5xl text-secondary'>What Our Cliet Say About Us</h2>
                </div>
                <div className='flex gap-8'>
                    <div onClick={prevTestimonial}>
                        <ArrowCircleLeftOutlined className='cursor-pointer text-accent hover:text-secondary' sx={{ fontSize: 50 }} />
                    </div>
                    <div onClick={nextTestimonial}>
                        <ArrowCircleRightOutlined className='cursor-pointer text-accent hover:text-secondary' sx={{ fontSize: 50 }} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full sm:justify-between'>
                <TestimonialCard testimonial={testimonials[testimonialIndex]} />
            </div>
        </div>
    )
}

export default Testimonial;