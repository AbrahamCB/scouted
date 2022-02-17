import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMAGE_URL } from '../../../../__lib__/helpers/HttpService';
import styles from './CardRow.module.css';

export default function CardRow({ job }) {
  const { job_title, min_salary, max_salary, job_type, job_bounty, job_slug, company, state } = job
  const { company_logo, company_name, company_slug } = company
  const router = useRouter()
  return (
    <div className={styles.card__row_wrapper}>
      <div className={styles.card__img}>
        <img src={`${IMAGE_URL}/${company_logo}`} alt="logo" />
      </div>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>
          <Link href={`/c/${company_slug}`}>
            <a >
              {company_name}
            </a>
          </Link>
        </h3>
        <div className={styles.card__details}>
          <h4 className={styles.card__subtitle}>
            <Link href={`/c/${company_slug}/${job_slug}`}>
              <a >
                {job_title}
              </a>
            </Link>
          </h4>
          <div className="d-flex gap-3">
            {job.tags.map((tag, i) => (

              <p className={styles.card__tag} key={i}>
                <Link href={`/tag/${tag.tag_slug}`}>
                  <a>{tag.tag_name}</a>
                </Link>
              </p>

            ))}
            <p className={styles.card__location}><Link href={`/search?location=${state?.state_name}`}><a>📍{state?.state_name}</a></Link></p>
          </div>
          <p className={styles.card__condition}>New</p>
          <p className={styles.card__price}>{`$${job_bounty}`}</p>
          <button onClick={() => router.push(`/r/${company.company_slug}/${job_slug}/`)} type="submit">refer now</button>
        </div>
        <div className='d-flex gap-10'>
          <p className={styles.card__schedule}>{job_type === 'full' && 'Full Time' || job_type === 'part' && 'Part Time' || job_type === 'any' && 'Others'}</p>
          <p className={`${styles.card__schedule} fs-6 fw-bold text-black`}>${min_salary + "-" + max_salary}/Monthly</p>
        </div>
      </div>
    </div >
  );
}
