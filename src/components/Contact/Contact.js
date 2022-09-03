import styles from './Contact.module.css'
import Image from 'next/image'

import contact from '../../../src/assets/contact/contact.png'
import star from '../../../src/assets/logo/star-icon.png'

const Contact = () => {
    return (
        <>
            <div className={styles.contactWrap}>
                <div className="contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className={styles.icon}>
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <h3>Our Address</h3>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">Dhaka, Bangladesh</li>
                                            <li>Dhaka, Bangladesh</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className={styles.icon}>
                                            <i className="fa fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <h3>Contact</h3>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                Mobile : <a href="tel:+8801987132107">01987132107</a>
                                            </li>
                                            <li className="mb-2">
                                                E-mail : <a href="mailto:hello@bela_tech.com">hello@bela_tech.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className={styles.icon}>
                                            <i className="fa fa-clock-o"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <h3>Hours of Operation</h3>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                Monday - Friday: 09:00 - 20:00
                                            </li>
                                            <li className="mb-2">
                                                Sunday &amp; Saturday: 10:30 - 22:00
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={styles.contactArea}>
                    <div className="container">
                        <div className={styles.sectionTitle}>
                        <span className={styles.subtitle}>
                            Get in Touch
                        </span>
                            <h2>Ready to Get Started?</h2>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-image">
                                    <Image src={contact} alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styles.contactForm}>
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={styles.formControl}
                                                        placeholder="Your name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className={styles.formControl}
                                                        placeholder="Your email address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="phone_number"
                                                        className={styles.formControl}
                                                        placeholder="Your phone number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className={styles.formControlTextArea}
                                                    cols="30"
                                                    rows="6"
                                                    placeholder="Write your message..."
                                                />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button
                                                    type="submit"
                                                    className={styles.defaultBtn}>
                                                    <i className="flaticon-tick"/>
                                                    <span>Send Message </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
};

export default Contact;