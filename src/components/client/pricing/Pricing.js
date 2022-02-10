
import Layout from './../layout/index';
import styles from './Pricing.module.css';
const Pricing = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className=''>
                        <div className="text-center mb-5">
                            <h1 className={styles.pricing__title}>Pricing: Employers</h1>
                            <p className='text-center'>Are you a bounty hunter? You can make referrals for free! We&apos;re the ones trying to pay you. 😎</p>
                        </div>
                        <div className={styles.pricing__area}>
                            <div className="row pt-5">
                                <div className='col-12 mb-5 text-center'>
                                    <div className={styles.card__body}>
                                        <h2 className={styles.card__title}>Our Bounty Fee</h2>
                                        <p>Your proposed bounty price is what bounty hunters will see on our board, and what they will be paid (in full) if they refer someone whom you hire.</p>
                                        <br />
                                        <p>Scouted fees are <span className={styles.card__title}>25%</span> of your proposed bounty.</p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6'>
                                    <div className={styles.card__body}>
                                        <h2 className={styles.card__title}>Example</h2>
                                        <p>You place a bounty of $10,000 to fill a role.</p>
                                        <p><b>Scenario A:</b> A bounty hunter fills it for you. You would owe $12,500 total, $10,000 of which goes to the bounty hunter after a 90-day escrow.</p>
                                        <br />
                                        <p><b>Scenario B:</b> Your role is filled directly by our Scouted network. We would only collect the bounty amount and waive the 25% fee.</p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 mt-5 mt-sm-0'>
                                    <div className={styles.card__body}>
                                        <h2 className={styles.card__title}>Picking a Bounty Price</h2>
                                        <p>If you’re posting a specific role for a bounty, how you price it is totally up to you.</p>
                                        <br />
                                        <p>Recruiting is a hard problem - this price should reflect what you feel you need to spend, in order to get this hard problem solved by someone who can help you.</p>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-6 mt-5'>
                                    <div className={styles.card__body}>
                                        <h2 className={styles.card__title}>General Candidates</h2>
                                        <p>We&apos;re constantly in touch with great talent who might not be an exact match for a posted bounty, but who we think you&apos;d want to meet anyway.</p>
                                        <br />
                                        <p>If these general candidates turn into <b> a hire for one of your non-Scouted-posted roles </b>, we price using default bounties of:</p>
                                        <p><b>$15,000</b> for a technical or leadership (Head of, VP) role, and</p>
                                        <p><b>$5,000</b> for a business role, with the same 25% markup policy as for bounty hires.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Pricing;