import React from 'react'
import HomeNav from '../../components/home-component/home-nav'
import Hero from '../../components/home-component/hero'
import JoinNow from '../../components/home-component/join-now'
import Classes from '../../components/home-component/classes'
import Trainers from '../../components/home-component/trainers'
import Pricing from '../../components/home-component/pricing'
import Schedule from '../../components/home-component/schedule'
import Testimonial from '../../components/home-component/testimonial'
import '../../styles.css'
import Consultancy from '../../components/home-component/consultancy'
import Footer from '../../components/home-component/footer'

const Home = () => {

    return (
        <div className='primary bg-primary'>
            <HomeNav />
            <Hero />
            <JoinNow />
            <Classes />
            <Schedule />
            <Trainers />
            <Pricing />
            <Testimonial />
            <Consultancy />
            <Footer />
        </div>
    )
}

export default Home