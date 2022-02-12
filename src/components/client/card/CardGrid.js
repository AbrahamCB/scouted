import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMAGE_URL } from '../../../../__lib__/helpers/HttpService';
import styles from './Card.module.css';

export default function CardGrid({ job }) {
  const { job_title, job_salary, job_slug, job_bounty, job_type, company, state } = job
  const { company_logo, company_name, company_slug } = company
  const router = useRouter()
  return (
    <div className={`${styles.card__wrapper}`}>
      <div className={`${styles.card__body} text-center`}>
        <div className={styles.card__img}>
          <img src={`${IMAGE_URL}/${company_logo}`} alt="card/img" />
        </div>
        <h3 className={styles.card__title}>
          <Link href={`c/${company_slug}`}>
            <a >
              {company_name}
            </a>
          </Link>
        </h3>
        <h4 className={styles.card__subtitle}>
          <Link href={`c/${company_slug}/${job_slug}`}>
            <a > {job_title}</a>

          </Link>
        </h4>
        <p className={styles.card__schedule}>{job_type === 'full' && 'Full Time' || job_type === 'part' && 'Part Time' || job_type === 'any' && 'Others'}</p>
        <p className={styles.card__price}>
          <span>{`$${job_bounty}`}</span> new
        </p>
        <div className={styles.card__location}>
          {job.tags.map((tag, i) => (

            <p className={styles.card__tag} key={i}>
              <Link href={`/tag/${tag.tag_slug}`}>
                <a>{tag.tag_name}</a>
              </Link>
            </p>

          ))}
          <span><Link href={`/search?location=${state?.state_name}`}><a >📍{state?.state_name}</a></Link></span>

        </div>
      </div>
      <div className={styles.card__footer}>

        <button onClick={() => router.push(`r/${company.company_slug}/${job_slug}`)} type="submit">refer</button>
      </div>
    </div>
  );
}
