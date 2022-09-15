import styles from '../styles/Home.module.css'


// Added Components
import About from '../src/components/About/About'
import Services from '../src/components/Services/Services'
import HereToHelp from '../src/components/HereToHelp/HereToHelp'
import Project from '../src/components/Project/Project'
import FunFacts from '../src/components/FunFacts/FunFacts'
import Team from '../src/components/Team/Team'
import Testimonial from '../src/components/Testimonial/Testimonial'
import Contact from '../src/components/Contact/Contact'



const Home = () => {
    return (
        <div>
            <div className={styles.bgColor}>
                <h1 className="text-center">Secure IT Solutions Services</h1>
                <p className="text-center">
                    Real innovations and a positive customer experience are the heart of successful communication.
                </p>
            </div>

            <About/>
            <Services/>
            <HereToHelp/>
            <Project/>
            <FunFacts/>
            <Team/>
            {/*<Testimonial/>*/}
            <Contact/>

        </div>
    )
};

export default Home;
