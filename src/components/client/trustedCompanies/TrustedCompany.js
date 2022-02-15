import Image from 'next/image';
import styles from './TrustedCompany.module.css';
import first from '/public/images/company/1.png';
import second from '/public/images/company/2.png';
import third from '/public/images/company/3.jpeg';
import four from '/public/images/company/4.png';
import five from '/public/images/company/5.png';
import six from '/public/images/company/6.png';
import seven from '/public/images/company/7.jpeg';

export default function TrustedCompany() {
  return (
    <section className={styles.trusted__company}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-8">
            <h3 className={styles.info__title}>Trusted Companies</h3>

            <div className={styles.company_logo} style={{ paddingTop: '40px' }}>
              <Image src={first} alt="company" />

              <Image src={second} alt="company" />

              <Image src={third} alt="company" />

              <Image src={four} alt="company" />


            </div>

            <div className={styles.company_logo} style={{ padding: '40px 0px' }}>
              <Image src={five} alt="company" />

              <Image src={six} alt="company" />
              <Image src={seven} alt="company" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
