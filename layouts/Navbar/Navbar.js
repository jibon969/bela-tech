import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>

            <section className={`${styles.topbar} d-flex align-items-center`}>
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className={`${styles.contact_info} d-flex align-items-center`}>
                        <i className="fa fa-envelope d-flex align-items-center">
                            <a href="mailto:belatech" className="mx-2">
                                belatech@gmail.com
                            </a>
                        </i>
                        <i className="fa fa-phone d-flex align-items-center ms-4">
                            <span className="mx-2">+ 88 01987132107</span>
                        </i>
                    </div>
                    <div className={`${styles.social_links} d-none d-md-flex align-items-center`}>
                        <a href="#" className={`${styles.navLink}`}>
                            <i className="fa fa-twitter"/>
                        </a>
                        <a href="#" className={`${styles.navLink}`}>
                            <i className="fa fa-facebook"/>
                        </a>
                        <a href="#" className={`${styles.navLink}`}>
                            <i className="fa fa-linkedin"/>
                        </a>
                        <a href="#" className={`${styles.navLink}`}>
                            <i className="fa fa-youtube"/>
                        </a>
                    </div>
                </div>
            </section>
            <div className={`${styles.header} sticky-top`}>
                <nav className={`${styles.headerBackground} navbar navbar-expand-lg navbar-dark`}>
                    <div className="container">
                        <a href="#" className="navbar-brand">Belatech</a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                            <div className={`navbar-nav`}>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>Home</a>
                                </Link>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>About</a>
                                </Link>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>Service</a>
                                </Link>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>Project</a>
                                </Link>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>Team</a>
                                </Link>
                                <Link href="/">
                                    <a className={`${styles.navItem} nav-item nav-link text-white`}>Contact</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};


export default Navbar;