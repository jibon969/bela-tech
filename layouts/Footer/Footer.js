import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.footerSection}>
                <footer className="footer-area bg-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-footer-widget">

                                    <p>Lorem ipsum dolor sit amet, consectetur elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                                        suspendisse.</p>
                                    <ul className="social-link">
                                        <li><a className="d-block" target="_blank" href="#">
                                            <i className="bx bxl-facebook"/></a></li>
                                        <li>
                                            <a className="d-block" target="_blank" href="#">
                                                <i className="bx bxl-twitter"/></a>
                                        </li>
                                        <li>
                                            <a className="d-block" target="_blank" href="#">
                                                <i className="bx bxl-instagram"/></a>
                                        </li>
                                        <li>
                                            <a className="d-block" target="_blank" href="#">
                                                <i className="bx bxl-linkedin"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="single-footer-widget pl-5"><h3>Explore</h3>
                                    <ul className="footer-links-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about-us">About</a></li>
                                        <li><a href="/case-studies-2-columns">Case Studies</a></li>
                                        <li><a href="/blog">Our Blog</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="single-footer-widget"><h3>Resources</h3>
                                    <ul className="footer-links-list">
                                        <li><a href="/team">Our Scientists</a></li>
                                        <li><a href="/services">Our Services</a></li>
                                        <li><a href="/testimonials">Testimonials</a></li>
                                        <li><a href="/services">SaaS Solutions</a></li>
                                        <li><a href="/case-studies-2-columns">Case Studies</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="single-footer-widget"><h3>Address</h3>
                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className="bx bx-map"/>
                                            175 5th Ave, New York, NY 10010,
                                        </li>
                                        <li><i className="bx bx-phone-call"></i><a href="tel:+44587154756">+1 (123) 456
                                            7890</a></li>
                                        <li><i className="bx bx-envelope"></i><a
                                            href="mailto:hello@tarn.com">hello@tarn.com</a></li>
                                        <li><i className="bx bxs-inbox"></i><a href="tel:+557854578964">+55 785
                                            4578964</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6"><p>Copyright @2022 <strong>Tarn</strong> All rights
                                    reserved <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p></div>
                                <div className="col-lg-6 col-md-6">
                                    <ul>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/terms-of-service">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-map">
                        ho
                    </div>
                </footer>
            </div>
        </>
)
};

export default Footer;