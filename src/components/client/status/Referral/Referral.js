import Link from 'next/link';
import Styles from './Referral.module.css';

const Referral = () => {
    return (
        <>
            <div className={Styles.referral__box}>
                <p className={Styles.title}>Submitted</p>
                <span>1/31/22, 11:20:20 PM</span>
            </div>
            <div className={Styles.referral__box}>
                <p className={Styles.title}>Candidate</p>
                <p className={Styles.description}>
                    <Link href='/'>
                        <a>nasir@gmail.com</a>
                    </Link>
                </p>
                <p className={Styles.description}>
                    <Link href='/'>
                        <a>https://facebok.com</a>
                    </Link>
                </p>

            </div>
            <div className={Styles.referral__box}>
                <div className='border-bottom border-gray pb-5 mb-5'>
                    <p className={Styles.title}>Bounty Hunter</p>
                    <span>Md Jahid</span>
                    <p className={Styles.description}>
                        <Link href="/">
                            <a >Jahidhsan2856@gmail.com</a>
                        </Link>
                    </p>
                    <p className={Styles.description}>
                        <Link href="/">
                            <a >https://facebook.com</a>
                        </Link>
                    </p>
                </div>
                <p className='mb-0'>Why are you referring this person? What makes this person stand out?</p>
                <p className='text-primary'>Ans</p>

                <p className='mb-0'>How familiar are you with this person&apos;s work?</p>
                <p className='text-primary'>Very - first hand knowledge</p>

                <p className='mb-0'>How would you describe them?</p>
                <p className='text-primary'>Superstar. One of the best people I know.</p>

                <p className='mb-0'>How open to new opportunities are they?</p>
                <p className='text-primary'>Not sure</p>

                <p className='mb-0'>You attest to their knowledge of being referred to Scouted, or a Scouted partner company. We&apos;ll be checking in with them!</p>
                <p className='text-primary'>Yes</p>

                <p className='mb-0'>How&apos;d you hear about us?</p>
                <p className='text-primary'>YC</p>

                <p className='mb-0'>Would you split your bounty payment with the candidate?</p>
                <p className='text-primary'>Yes - 50/50</p>
            </div>
        </>
    );
};

export default Referral;