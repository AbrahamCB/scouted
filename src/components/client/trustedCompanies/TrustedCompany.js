import Image from 'next/image';
import styles from './TrustedCompany.module.css';
// import company from '../../../assets/company.png';
import company from '/public/images/partner.png';

export default function TrustedCompany() {
  return (
    <section className={styles.trusted__company}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-8">
            <div className={styles.trusted__company_info}>
              <h3 className={styles.info__title}>Trusted Companies</h3>
              <Image src={company} alt="company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
