import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import banner from '../src/assets/banner/banner-bg.png'

import HereToHelp from '../src/components/HereToHelp/HereToHelp'
import Services from '../src/components/Services/Services'
import Team from '../src/components/Team/Team'
import Project from '../src/components/Project/Project'
import Contact from '../src/components/Contact/Contact'
// import Testimonial from '../src/components/Testimonial/Testimonial'

import FunFacts from '../src/components/FunFacts/FunFacts'
import Solutions from '../src/components/Solutions/Solutions'


const Home = () => {
    return (
        <div>
            <div className="p-5 bg-primary text-white">
                <h1 className="text-center">Secure IT Solutions Services</h1>
                <p className="text-center">
                    Real innovations and a positive customer experience are the heart of successful communication.
                </p>
            </div>
            <Solutions/>
            <Services/>
            <Project/>
            <FunFacts/>
            <Team/>
            <Contact/>
        </div>
    )
};

export default Home;
