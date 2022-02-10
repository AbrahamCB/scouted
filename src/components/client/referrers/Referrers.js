import Link from "next/link";
import Layout from "../layout";
import styles from './Referrers.module.css';
const Referrers = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.referrer__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.referrer__title}>Referring on Scouted</h1>
                            <p className='text-center'>Scouted is a talent marketplace that matches talent to a company&apos;s needs, in exchange for a reward.</p>
                        </div>
                        <ol>
                            <li>Go to <Link href="/"><a>Scouted.com</a></Link>  to see the bounty board.</li>

                            <li>Pick which role or role(s) you want to explore with your network.</li>
                            <li>Have a friend or former colleague that sounds like a great fit for a role? Come across someone’s background or portfolio recently who’s a good match? See an opportunity that sounds too good to pass up for yourself?</li>
                            <li>Click “Refer” and fill out the short form. Hit “Submit.”</li>
                            <li>Create a free Scouted account (if you haven&apos;t already done so!). When you log in , you&apos;ll see your hunting dashboard, where you’ll always have a pulse on the status of your referrals and your bounty rewards.</li>

                            <li>The bounty is refundable for 90 days, in case your new hire doesn’t work out.</li>
                            <li>You can make a max of 20 referrals on Scouted. Want more? Contact us about becoming a VIP bounty hunter.</li>

                        </ol>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Referrers;