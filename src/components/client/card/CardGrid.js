import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMAGE_URL } from '../../../../__lib__/helpers/HttpService';
import styles from './Card.module.css';

export default function CardGrid({ job }) {
  const { job_title, max_salary, min_salary, job_slug, job_bounty, job_type, company, state } = job
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
        <div className="d-flex justify-content-center ">
          <div className=" d-flex gap-5">
            <p className={styles.card__schedule}>{job_type === 'full' && 'Full Time' || job_type === 'part' && 'Part Time' || job_type === 'any' && 'Others'}</p>
            <p className={styles.card__schedule}>${min_salary + "-" + max_salary}/Monthly</p>
          </div>

        </div>
        <p className={styles.card__price}>
          <span>{`$${job_bounty}`}</span> new
        </p>
        <div >
          <div className={styles.card__location}>
            {job.tags.map((tag, i) => (

              <p className={`${styles.card__tag} d-flex flex-warp`} key={i}>
                <Link href={`/tag/${tag.tag_slug}`}>
                  <a>{tag.tag_name}</a>
                </Link>
              </p>

            ))}
          </div>
          <p className='mt-3'><Link href={`/search?location=${state?.state_name}`}><a >📍{state?.state_name}</a></Link></p>

        </div>
      </div>
      <div className={styles.card__footer}>

        <button onClick={() => router.push(`r/${company.company_slug}/${job_slug}`)} type="submit">refer</button>
      </div>
    </div>
  );
}
