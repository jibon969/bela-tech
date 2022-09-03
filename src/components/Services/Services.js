import styles from './Services.module.css'
import Image from 'next/image'
import Link from 'next/link'
import service1 from '../../../src/assets/service/service-icon1.png'

const Services = () => {
    return (
        <>
            <div className={styles.servicesArea}>
                <div className="container">
                     <h2 className="text-center mb-3">Our Services </h2>
                    <p className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, praesentium!</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Data Analytics</a>
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <Link href="/">
                                    <a className={styles.viewDetailsBtn}>View Details</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Services;