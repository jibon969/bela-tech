import styles from './Testimonial.module.css'
import Image from 'next/image'
import Link from 'next/link'
import team from '../../../src/assets/team/team.jpg'
import team1 from '../../../src/assets/team/team1.jpg'
import team2 from '../../../src/assets/team/team2.jpg'
import team3 from '../../../src/assets/team/team2.jpg'
import team4 from '../../../src/assets/team/team3.jpg'

const Testimonial = () => {
    return (
        <div>
            <div className={styles.testimonialSection}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Testimonial </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Testimonial;