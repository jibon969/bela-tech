import styles from './About.module.css'
import Image from 'next/image'
import Link from 'next/link'

import service1 from '../../../src/assets/service/service-icon1.png'
import service2 from '../../../src/assets/service/service2.png'
import python from '../../../src/assets/logo/python2.jpg'
import django from '../../../src/assets/logo/django.png'
import djangoRest from '../../../src/assets/logo/djangoRest.png'
import react from '../../../src/assets/logo/react.png'
import reactNative from '../../../src/assets/logo/react-native.png'
import nextjs from '../../../src/assets/logo/nextjs.png'
import database from '../../../src/assets/logo/database.png'
import uiUx from '../../../src/assets/logo/ui-ux.jpg'


const About = () => {
    return (
        <>
            <section className={styles.aboutArea}>
                <div className="container">
                    <div className={styles.aboutTitleWrap}>
                        <h1 className={styles.aboutTitle}>We Different From Others</h1>
                        <h2 className={styles.aboutTitle}>Should Choose Us</h2>
                        <p className={styles.about_sub_title}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, praesentium!
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className={styles.singleBox}>
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
                            <div className={styles.singleBox}>
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
                            <div className={styles.singleBox}>
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
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="mb-3">Design & Development</h3>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Responsive Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                React Development
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Nextjs Development
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Django Development
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                App Development
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                E-commerce Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                UX/UI Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Web Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Graphic Design
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className={styles.box}>
                                            <h5>
                                                <span className={styles.iconDesign}>
                                                    <i className="fa fa-check" aria-hidden="true"/>
                                                </span>
                                                Print Ready Design
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image">
                                    <Image src={service2}/>
                                </div>
                                <div className="logo">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <Image src={python}/>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src={djangoRest}/>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src={nextjs}/>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src={react}/>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src={reactNative}/>
                                        </div>
                                        <div className="col-md-2">
                                            <Image src={uiUx}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;