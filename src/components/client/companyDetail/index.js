import Link from 'next/link';
import { IMAGE_URL } from '../../../../__lib__/helpers/HttpService';
import CardRow from '../cardrow/CardRow';
import Layout from '../layout';
import styles from './CompanyDetail.module.css';
const CompanyDetail = ({ companyDetail, jobs }) => {
    const { company_name, company_logo, company_description, website_url, founded_date,
        linkedin_url, facebook_url, twitter_url, instagram_url } = companyDetail[0]

    return (
        <>
            <Layout>
                <section className={styles.about__company}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className={`${styles.about__company_info} text-center`}>
                                    <div className={styles.site__logo}>
                                        <img src={`${IMAGE_URL}/${company_logo}`} alt="ample ink" />
                                        <Link href="/">
                                            <a>
                                                <h2 className={styles.site__title}>{company_name}</h2>
                                            </a>
                                        </Link>
                                    </div>

                                    <p className={styles.about__description}>{company_description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center py-5">
                            <div className="col-md-4">
                                <div className={styles.company__info}>
                                    <ul>
                                        <li className={styles.company__info_list}>
                                            <span>Founded : {founded_date}</span>
                                        </li>
                                        <li className={styles.company__info_list}>
                                            <span>Size : 1-10</span>
                                        </li>
                                        <li className={styles.company__info_list}>
                                            <span>Website : {website_url}</span>
                                        </li>
                                        <li className={styles.company__info_list}>
                                            <div className={styles.social__info}>
                                                <Link href={facebook_url || '/'}>
                                                    <a>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </Link>
                                                <Link href={twitter_url || '/'}>
                                                    <a>
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </Link>
                                                <Link href={instagram_url || '/'}>
                                                    <a>
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </Link>
                                                <Link href={linkedin_url || '/'}>
                                                    <a>
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </Link>
                                                <Link href="">
                                                    <a>
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles.company__map}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9552228.029457463!2d-13.426859403448708!3d54.23165029727858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1642435130535!5m2!1sen!2sbd"
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.cards__container}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">


                                {jobs.map((job, i) => <CardRow key={i} job={job} />)}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default CompanyDetail;