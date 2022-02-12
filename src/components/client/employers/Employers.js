import Link from "next/link";
import { useRouter } from 'next/router';
import Layout from "../layout";
import styles from './Employers.module.css';
const Employers = () => {
    const router = useRouter()
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.employer__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.employer__title}>Hiring on Scouted</h1>
                            <p className='text-center'>Scouted is a talent marketplace that matches talent to your company&apos;s needs, in exchange for a reward.</p>
                        </div>
                        <ol>
                            <li>Tell us what roles you need help with.</li>
                            <li>Set a bounty for each role.* See our <Link href="/pricing">
                                <a >Pricing Page</a>
                            </Link> for more info.</li>
                            <li>We publish your role and the bounty to our job board.</li>
                            <li>We promote each role to targeted audiences. We use the Scouted network for general roles, where we already trust people to refer high-caliber talent. We also encourage you to share the posting with your broader network.</li>
                            <li>Anyone can submit a referral, and all are bounty-eligible. Candidates can submit themselves. We also have our own internal talent acquisition team who source for your roles.</li>
                            <li>We screen candidates first, and only recommend to you those who we think are a good fit.</li>
                            <li>You only owe the bounty when your new hire starts.</li>
                            <li>The bounty is refundable for 90 days, in case your new hire doesn&apos;t work out.</li>

                        </ol>
                        <div className="mx-3">
                            <span>* This is what bounty hunters will see on our board, and what they will be paid (in full) if they refer someone whom you hire. <b>Scouted fees are 25% of the posted bounty</b> for running the marketplace and vetting candidates.</span>
                            <br />
                            <br />
                            <span>
                                For example, if you place a bounty of $10,000 to fill a role, and a bounty hunter fills it for you, you would owe $12,500 total, $10,000 of which goes to the bounty hunter after a 90 day escrow.
                            </span>
                        </div>
                        <div className="text-center mt-5">
                            {/* <button onClick={() => router.push('/propose-bounty')} className="btn btn-primary">Propose a Bounty</button> */}

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Employers;