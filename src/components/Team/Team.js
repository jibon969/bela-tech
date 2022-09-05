import styles from './Team.module.css'
import Image from 'next/image'
import Link from 'next/link'
import team from '../../../src/assets/team/team.jpg'
import team1 from '../../../src/assets/team/team1.jpg'
import anjana from '../../../src/assets/team/anjana.png'
import team3 from '../../../src/assets/team/team2.jpg'
import team4 from '../../../src/assets/team/team3.jpg'

const Team = () => {
    return (
        <div>
            <section className={styles.team_member}>
                <div className="container">
                    <div className="text-center">
                        <h2 className={styles.teamTitle}>Meet our Team</h2>
                        <p className={styles.team_sub_title}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, magnam.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="text-center wow fadeInUp"
                                 data-wow-duration="1s"
                                 data-wow-delay="0.5s"
                                 data-wow-offset="0">
                                <div className={styles.our_team}>
                                    <div className={styles.team_img}>
                                        <Image src={team} alt="team-image"/>
                                        <ul className={styles.social}>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-facebook"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-twitter"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-linkedin"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-instagram"/></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.team_content}>
                                        <h5 className={styles.title}>Jibon Ahmed</h5>
                                        <p className={styles.post}>Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="text-center wow fadeInUp"
                                 data-wow-duration="1s"
                                 data-wow-delay="0.5s"
                                 data-wow-offset="0">
                                <div className={styles.our_team}>
                                    <div className={styles.team_img}>
                                        <Image src={team4} alt="team-image"/>
                                        <ul className={styles.social}>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-facebook"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-twitter"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-linkedin"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-instagram"/></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.team_content}>
                                        <h5 className={styles.title}>Masuk Ahmed</h5>
                                        <p className={styles.post}>Full Stack Software Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="text-center wow fadeInUp"
                                 data-wow-duration="1s"
                                 data-wow-delay="0.5s"
                                 data-wow-offset="0">
                                <div className={styles.our_team}>
                                    <div className={styles.team_img}>
                                        <Image src={team3} alt="team-image"/>
                                        <ul className={styles.social}>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-facebook"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-twitter"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-linkedin"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-instagram"/></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.team_content}>
                                        <h5 className={styles.title}>Tasnia Farin</h5>
                                        <p className={styles.post}>Software Tester</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="text-center wow fadeInUp"
                                 data-wow-duration="1s"
                                 data-wow-delay="0.5s"
                                 data-wow-offset="0">
                                <div className={styles.our_team}>
                                    <div className={styles.team_img}>
                                        <Image src={anjana} alt="team-image"/>
                                        <ul className={styles.social}>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-facebook"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-twitter"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-linkedin"/></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a><i className="fa fa-instagram"/></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.team_content}>
                                        <h5 className={styles.title}>Anjana Vakil</h5>
                                        <p className={styles.post}>UI/Ux Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Team;