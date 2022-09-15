import styles from './Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import project1 from '../../../src/assets/project/project1.jpg'
import project2 from '../../../src/assets/project/project2.jpg'
import project3 from '../../../src/assets/project/project3.jpg'
import project4 from '../../../src/assets/project/project4.jpg'
import project5 from '../../../src/assets/project/project5.jpg'
import project6 from '../../../src/assets/project/project6.jpg'
import project7 from '../../../src/assets/project/1.PNG'
import project8 from '../../../src/assets/project/2.PNG'

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
                                    <Image src={project1} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="https://belasea.com/">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project2} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="https://belaface.be/">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project3} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="http://188.166.250.49/">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project4} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project7} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project5} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project6} alt="image" width="750" height="600"/>
                                    <div className={styles.overlay}>
                                        <span>
                                            <Link href="">
                                                <a className={styles.clickHere}>Click Here</a>
                                            </Link>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <Image src={project8} alt="image" width="750" height="600"/>
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