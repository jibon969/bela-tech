import styles from '../styles/Home.module.css'
import About from '../src/components/About/About'
import Team from '../src/components/Team/Team'
import Solutions from '../src/components/Solutions/Solutions'
import Services from '../src/components/Services/Services'
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
            <Contact/>
        </div>
    )
};

export default Home;
