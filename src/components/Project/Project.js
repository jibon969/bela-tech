import styles from './Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import team from '../../../src/assets/team/team.jpg'
import team1 from '../../../src/assets/team/team1.jpg'
import team2 from '../../../src/assets/team/team2.jpg'
import team3 from '../../../src/assets/team/team2.jpg'
import team4 from '../../../src/assets/team/team3.jpg'

const Project = () => {
    return (
        <div>
            <section className={styles.projectSection}>
                <div className="container">
                    <div className={styles.projectTitle}>
                        <h2>Check Some Of Our Recent Work</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className={`${styles.image_gallery} list-unstyled`}>
                                <li>
                                    <img src="https://source.unsplash.com/DqyYTM7pR2o/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/e6FMMambeO4/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/klCiPmzUw0Y/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/IdNOTjPeHrE/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/O0N9MF--hK4/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/FV3GConVSss/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/0ESjL-Nw22Y/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/KTVn62x6fFw/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/VSeVhmW4_JQ/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/07aFaTf24Kg/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/DqyYTM7pR2o/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://source.unsplash.com/0ESjL-Nw22Y/640x416" alt=""/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Project;