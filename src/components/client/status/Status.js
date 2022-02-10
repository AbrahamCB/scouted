import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import Layout from "../layout";
import Activity from "./Activity/Activity";
import Referral from "./Referral/Referral";
import Styles from './Status.module.css';
const Status = () => {
    const router = useRouter()
    const [referral, setReferral] = useState(true)
    const [activity, setActivity] = useState(false)
    return (
        <>
            <Layout>
                <div className="container mt-5 px-5">
                    <div>
                        <p onClick={() => router.push('/user/dashboard')} className={Styles.status__nav}>
                            <span>
                                <svg style={{ width: '8px' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" /></svg>
                            </span>
                            <span>
                                Dashboard
                            </span>
                        </p>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className={Styles.status__area}>
                                <h1 className="text-center display-6">Referal Status</h1>
                                <p className={Styles.status__link}>
                                    <Link href="/">
                                        <a>Nasir Mia </a>
                                    </Link>
                                    <span> for </span>
                                    <Link href="/">
                                        <a> General Referral </a>
                                    </Link>
                                    <span> at </span>
                                    <Link href="/">
                                        <a> Scouted</a>
                                    </Link>
                                </p>
                                <div className="mt-5">
                                    <div className={Styles.nav__button}>
                                        <button onClick={() => {
                                            setReferral(true)
                                            setActivity(false)
                                        }} className={`${referral && 'text-primary border-bottom border-primary'}`}>Referral</button>
                                        <button onClick={() => {
                                            setActivity(true)
                                            setReferral(false)
                                        }} className={`${activity && 'text-primary border-bottom border-primary'}`}>Activity</button>
                                    </div>
                                    <div className="">
                                        {referral && <Referral />}
                                        {activity && <Activity />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Status;