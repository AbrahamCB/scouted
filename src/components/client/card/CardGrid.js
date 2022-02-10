import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Card.module.css';
import defaultLogo from '/public/images/default-logo.png';

export default function CardGrid({ job }) {
  const { job_title, job_salary, job_slug, job_bounty, company } = job
  const { company_logo, company_name, company_slug } = company
  const router = useRouter()
  return (
    <div className={`${styles.card__wrapper}`}>
      <div className={`${styles.card__body} text-center`}>
        <div className={styles.card__img}>
          <Image src={defaultLogo} alt="card/img" />
        </div>
        <h3 className={styles.card__title}>
          <Link href={`/${company_slug}`}>
            <a >
              {company_name}
            </a>
          </Link>
        </h3>
        <h4 className={styles.card__subtitle}>
          <Link href={`/${company_slug}/${job_slug}`}>
            <a > {job_title}</a>

          </Link>
        </h4>
        <p className={styles.card__schedule}>remote/fulltime</p>
        <p className={styles.card__price}>
          <span>{`$${job_bounty}`}</span> new
        </p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__location}>
          <i className="fas fa-map-marker-alt"></i>
          <span>San Francisco, CA, USA</span>
        </div>
        <button onClick={() => router.push(`/${company.company_slug}/${job_slug}/refer`)} type="submit">refer</button>
      </div>
    </div>
  );
}
