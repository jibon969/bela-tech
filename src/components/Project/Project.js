import styles from './Team.module.css'
import Image from 'next/image'
import Link from 'next/link'
import team from '../../../src/assets/team/team.jpg'
import team1 from '../../../src/assets/team/team1.jpg'
import team2 from '../../../src/assets/team/team2.jpg'
import team3 from '../../../src/assets/team/team2.jpg'
import team4 from '../../../src/assets/team/team3.jpg'

const Team = () => {
    return (
        <div>
            <div className={`${styles.team}`}>
                <div className="container">
                    <h2 className={`${styles.teamTitle} mb-3`}>Our Team</h2>
                    <p className="text-center mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                    </p>

                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 transform-on-hover">
                                <a className="lightbox" href={{team}}>
                                    <Image src={{team}} alt="Card Image" className="card-img-top"/>
                                </a>
                                <div className="card-body">
                                    <h6><a href="#">Lorem Ipsum</a></h6>
                                    <p className="text-muted card-text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc quam urna.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        < /div>
    )
};

export default Team;