import styles from './Team.module.css'
import Image from 'next/image'
import Link from 'next/link'
import team from '../../../src/assets/team/team.jpg'
import team2 from '../../../src/assets/team/team2.jpg'
import team3 from '../../../src/assets/team/team3.jpg'
import team4 from '../../../src/assets/team/team4.jpg'

const Team = () => {
    return (
        <>
            <div className={styles.team}>
                <div className="container">
                    <h2 className={`${styles.teamTitle} mb-3`}>Our Team</h2>
                    <p className="text-center mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                    </p>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="card border-0 shadow">
                                <Image src={team} className="card-img-top" height={450}/>
                                <div className="card-body text-center pb-0">
                                    <h5 className="card-title mb-0">Jibon Ahmed</h5>
                                    <div className="card-text text-black-50">Software Engineer</div>
                                    <ul className="list-unstyled">
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </Link>

                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-youtube-square"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="card border-0 shadow">
                                <Image src={team2} className="card-img-top" height={450}/>
                                <div className="card-body text-center pb-0">
                                    <h5 className="card-title mb-0">Jibon Ahmed</h5>
                                    <div className="card-text text-black-50">Software Engineer</div>
                                    <ul className="list-unstyled">
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </Link>

                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-youtube-square"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="card border-0 shadow">
                                <Image src={team3} className="card-img-top" height={450}/>
                                <div className="card-body text-center pb-0">
                                    <h5 className="card-title mb-0">Jibon Ahmed</h5>
                                    <div className="card-text text-black-50">Software Engineer</div>
                                    <ul className="list-unstyled">
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </Link>

                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-youtube-square"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="card border-0 shadow">
                                <Image src={team4} className="card-img-top" height={450}/>
                                <div className="card-body text-center pb-0">
                                    <h5 className="card-title mb-0">Jibon Ahmed</h5>
                                    <div className="card-text text-black-50">Software Engineer</div>
                                    <ul className="list-unstyled">
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </Link>

                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-instagram"/>
                                            </a>
                                        </li>
                                        <li className={`${styles.socialMedia} list-inline-item`}>
                                            <a href="#">
                                                <i className="fa fa-youtube-square"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Team;