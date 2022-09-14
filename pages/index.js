import styles from '../styles/Home.module.css'
import Team from '../src/components/Team/Team'


const Home = () => {
    return (
        <div>
            <div className={styles.bgColor}>
                <h1 className="text-center">Secure IT Solutions Services</h1>
                <p className="text-center">
                    Real innovations and a positive customer experience are the heart of successful communication.
                </p>
            </div>

            <Team/>
        </div>
    )
};

export default Home;
