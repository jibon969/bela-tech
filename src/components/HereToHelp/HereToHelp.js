import styles from './HereToHelp.module.css'
import Image from 'next/image'

import service1 from '../../../src/assets/service/service-icon1.png'

const HereToHelp = () => {
    return (
        <>
            <div className={styles.hereToHelpArea}>
                <div className="container">
                    <h2 className={styles.mainTitle}>We’re Here To Help</h2>
                    <p className={`${styles.subTitle} mb-5`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna.
                    </p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Email Notifications</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Simple Dashboard</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Information Retrieval</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Deadline Reminders</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Email Notifications</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3 className={`${styles.title}`}>Simple Dashboard</h3>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HereToHelp;