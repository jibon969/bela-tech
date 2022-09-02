import styles from './ProjectStartArea.module.css'
import Image from 'next/image'
import projectStart from '../../../src/assets/project-start1.png'
import circleShape from '../../../src/assets/circle-shape1.png'

const ProjectStartArea = () => {
    return (
        <>
            <div className={styles.projectStartArea}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.projectStartImage}>
                                <Image src={projectStart} alt="image"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.projectStartContent}>
                                <h2>We Like to Start Your Project With Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <a className={styles.defaultBtn} href="/">
                                    <i className="flaticon-web"></i>Get Started<span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.circleShape1}>
                    <Image src={circleShape} alt="image"/>
                </div>
            </div>
        </>
    )
};

export default ProjectStartArea;