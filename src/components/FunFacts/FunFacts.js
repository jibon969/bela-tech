import styles from './FunFacts.module.css'
import Image from 'next/image'
import fun from '../../../src/assets/funfacts/fun-icon1.png'
import fun2 from '../../../src/assets/funfacts/fun-icon2.png'
import fun3 from '../../../src/assets/funfacts/fun-icon3.png'
import fun4 from '../../../src/assets/funfacts/fun-icon4.png'

const FunFacts = () => {
    return (
        <div>
            <div className={styles.funFactsSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className={styles.image}>
                                <Image src={fun}/>
                                <div className="mx-4">
                                    <h5>3 Years +</h5>
                                    <span>On the market</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={styles.image}>
                                <Image src={fun2}/>
                                <div className="mx-4">
                                    <h5>10 +</h5>
                                    <span>Team Members</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={styles.image}>
                                <Image src={fun3}/>
                                <div className="mx-4">
                                    <h5>100 %</h5>
                                    <span>Satisfaction Rate</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className={styles.image}>
                                <Image src={fun4}/>
                                <div className="mx-4">
                                    <h5>5 %</h5>
                                    <span>Senior Software Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FunFacts;