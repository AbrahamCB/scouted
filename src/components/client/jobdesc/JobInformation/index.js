import dateFormat from "dateformat";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMAGE_URL } from "../../../../../__lib__/helpers/HttpService";
import styles from '../JobDesc.module.css';
import ContactUs from './ContactUs';
const JobInformation = ({ jobDetail }) => {
    const { min_salary, max_salary, company, country, state, joining_date, working_hours, expiry_date, _hourly, hourly_rate, job_title, job_slug } = jobDetail
    const { company_name, company_slug, company_logo } = company
    const router = useRouter()
    return (
        <aside className=" py-3 py-md-0">
            <div className={styles.job__detail_information}>
                <h3 className={styles.information__title}>
                    Job Details Information
                </h3>
                <div className={styles.information__box}>
                    <i className="far fa-calendar-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Job Joining Date</h4>
                        <p>{dateFormat(joining_date, "longDate")}</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-calendar-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Expiration Date</h4>
                        <p>{dateFormat(expiry_date, "longDate")}</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="fas fa-map-marker-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Location</h4>
                        <p>{state?.state_name}, <span className='text-uppercase'>{country?.country_code}</span></p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-user-circle"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Job Role</h4>
                        <p>{job_title}</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-clock"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Working Hours</h4>
                        <p>{working_hours}h/weekly</p>
                    </div>
                </div>
                {_hourly === 1 && <div className={styles.information__box}>
                    <i className="fas fa-dollar-sign"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Rate</h4>
                        <p>${hourly_rate}/hour</p>
                    </div>
                </div>}
                <div className={styles.information__box}>
                    <i className="fas fa-dollar-sign"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Salary</h4>
                        <p>{`$${min_salary + '-' + max_salary}`}/month</p>
                    </div>
                </div>
            </div>
            <div className={styles.apply__job}>
                <button onClick={() => router.push(`/r/${company_slug}/${job_slug}/`)} type="submit">Refer for this job</button>
            </div>
            <div className={styles.about__company}>
                <h4 className={styles.company__subtitle}>About Company</h4>
                <div className={styles.company__title}>
                    <img src={`${IMAGE_URL}/${company_logo}`} alt="Ample" />
                    <span>{company_name}</span>
                </div>
                <Link href={`/c/${company_slug}`}>
                    <a className={styles.company__link}>Full Company Profile</a>
                </Link>
            </div>
            <ContactUs />
        </aside>
    );
};

export default JobInformation;