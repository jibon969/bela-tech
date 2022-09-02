import styles from './Footer.module.css'
import Image from 'next/image'
import footerMapImage from '../../src/assets/footer-map.png'

const Footer = () => {
    return (
        <>
            <footer className={styles.footerArea}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className={`${styles.singleFooterWidget}`}>
                                <a href="/" className="logo">
                                    {/*<img src="img/logo.png" alt="logo"/>*/}
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                                <ul className="list-unstyled">
                                    <li className={`${styles.socialMedia} list-inline-item`}>
                                        <a href="#">
                                            <i className="fa fa-facebook"/>
                                        </a>
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
                        <div className="col-lg-2 col-sm-6">
                            <div className={`${styles.singleFooterWidget}pl-5`}>
                                <h3>Explore</h3>
                                <ul className={styles.footerLinksList}>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about-us">About</a></li>
                                    <li><a href="/case-studies-2-columns">Case Studies</a></li>
                                    <li><a href="/blog">Our Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className={styles.singleFooterWidget}>
                                <h3>Resources</h3>
                                <ul className={styles.footerLinksList}>
                                    <li><a href="/team">Our Scientists</a></li>
                                    <li><a href="/services">Our Services</a></li>
                                    <li><a href="/testimonials">Testimonials</a></li>
                                    <li><a href="/services">SaaS Solutions</a></li>
                                    <li><a href="/case-studies-2-columns">Case Studies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className={styles.singleFooterWidget}>
                                <h3>Address</h3>
                                <ul className={styles.footerLinksList}>
                                    <li><a href="/">Our Scientists</a></li>
                                    <li><a href="/">Our Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottomArea}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright @<strong> BelaTech</strong>
                                    <a target="_blank" href="https://github.com/jibon969"> All rights reserved</a>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <a href="/privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms-of-service">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerMap}>
                    <Image src={footerMapImage} alt="image"/>
                </div>
            </footer>

        </>
    )
};

export default Footer;