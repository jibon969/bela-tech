import styles from './Solutions.module.css'
import Image from 'next/image'
import Link from 'next/link'
import service1 from '../../../src/assets/service/service-icon1.png'
import service2 from '../../../src/assets/service/service2.png'

const Solutions = () => {
    return (
        <>
            <div className={styles.solutionsArea}>
                <div className="container">
                    <div className={styles.solutionsTitleWrap}>
                        <h1 className={styles.solutionsTitle}>We Different From Others</h1>
                        <h2 className={styles.solutionsTitle}>Should Choose Us</h2>
                        <p className={styles.solutions_sub_title}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, praesentium!
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleServicesBox}>
                                <div className="icon">
                                    <Image src={service1} alt="image"/>
                                </div>
                                <h3>
                                    <Link href="/">
                                        <a>Code Security</a>
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
                                        <a>Team Management</a>
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
                                        <a>Access Controlled</a>
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
                    <div className={styles.designDevelopment}>
                        <h3>Design & Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum!</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> Responsive Design</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> React Development</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> NextJs Development</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> Apps Development</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> UX/UI Design</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> E-commerce Design</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> Web Design</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.design}>
                                            <h5><i className="fa fa-check mx-2" aria-hidden="true"/> Print Ready Design</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Image src={service2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Solutions;