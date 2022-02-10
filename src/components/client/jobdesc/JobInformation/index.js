import Image from 'next/image';
import Link from 'next/link';
import ample from '../../../../assets/ample1.png';
import styles from '../JobDesc.module.css';
import ContactUs from './ContactUs';
const JobInformation = ({ jobDetail }) => {
    const { job_salary, company } = jobDetail
    const { company_name, company_slug } = company

    return (
        <aside className=" py-3 py-md-0">
            <div className={styles.job__detail_information}>
                <h3 className={styles.information__title}>
                    Job Details Information
                </h3>
                <div className={styles.information__box}>
                    <i className="far fa-calendar-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Job Position Data</h4>
                        <p>05 January 2022</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-calendar-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Expiration Data</h4>
                        <p>05 January 2022</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="fas fa-map-marker-alt"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Location</h4>
                        <p>San Francisco, USA</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-user-circle"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Job Role</h4>
                        <p>Lead Product Designer</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="far fa-clock"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Working Hours</h4>
                        <p>40h/weekly</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="fas fa-dollar-sign"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Rate</h4>
                        <p>$15/hour</p>
                    </div>
                </div>
                <div className={styles.information__box}>
                    <i className="fas fa-dollar-sign"></i>
                    <div className={styles.box__info}>
                        <h4 className={styles.info__title}>Salary</h4>
                        <p>{`$${job_salary}`}/month</p>
                    </div>
                </div>
            </div>
            <div className={styles.apply__job}>
                <button type="submit">apply for this job</button>
            </div>
            <div className={styles.about__company}>
                <h4 className={styles.company__subtitle}>About Company</h4>
                <div className={styles.company__title}>
                    <Image src={ample} alt="Ample" />
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