import { useRouter } from 'next/router';
import Styles from '../Dashboard.module.css';



const ReferTable = ({ refer, job }) => {

    const { job_title, company } = job
    const router = useRouter()
    return (
        <>

            <tr>

                <td className="d-flex align-items-center justify-content-center">{refer.candidate_name}</td>
                <td className={Styles.tbody__data}>
                    <p className={Styles.table__rec}>Spam</p>
                </td>
                <td className={Styles.tbody__data}>
                    <p className={Styles.table__status}>Pass</p>
                    <p className='mt-1 mb-0'>Update: 1/30</p>
                </td>
                <td className={Styles.table__role}>
                    <span className={Styles.job__title}>{job_title}</span>
                    <p className='mt-1 mb-0'>
                        <img src="/images/logo.png" alt="" />
                        <span className={Styles.company__name}>{company.company_name}</span>
                    </p>
                </td>
                <td className={Styles.tbody__data}>
                    <div className='d-flex  gap-5 align-items-center justify-content-center'>
                        <div>
                            <p className='mb-0'>{new Date(refer.created_at).toLocaleDateString()}</p>
                            <p className='mb-0'>{new Date(refer.created_at).toLocaleTimeString()}</p>
                        </div>
                        <p className='mb-0'>

                            <button onClick={() => router.push('/status')} className='btn'>
                                <svg style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                                </svg>
                            </button>

                        </p>
                    </div>

                </td>
                {/* <td className="d-flex align-items-center justify-content-center">{refer.candidate_name}</td>
                <td className={Styles.tbody__data}>
                    <p className={Styles.table__rec}>Spam</p>
                </td>
                <td className={Styles.tbody__data}>
                    <p className={Styles.table__status}>Pass</p>
                    <p className='mt-1 mb-0'>Update: 1/30</p>
                </td>
                <td className={Styles.table__role}>
                    <Link href="/general_referral">
                        <a className={Styles.job__title}>{job_title}</a>
                    </Link>
                    <p className='mt-1 mb-0'>
                        <img src="/images/logo.png" alt="" />
                        <Link href="/scouted">
                            <a className={Styles.company__name}>{company.company_name}</a>
                        </Link>

                    </p>
                </td>
                <td className={Styles.tbody__data}>
                    <div className='d-flex  gap-5 align-items-center justify-content-center'>
                        <div>
                            <p className='mb-0'>{new Date().toLocaleDateString()}</p>
                            <p className='mb-0'>{new Date().toLocaleTimeString()}</p>
                        </div>
                        <p className='mb-0'>
                            <Link href="/status">
                                <a>
                                    <svg style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" className="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
                                    </svg>
                                </a>
                            </Link>
                        </p>
                    </div>

                </td> */}
            </tr>
        </>
    );
};

export default ReferTable;