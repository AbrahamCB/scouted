
import parse from 'html-react-parser';
import Link from 'next/link';
import { useState } from 'react';
import TimeAgo from 'react-timeago';
import { IMAGE_URL } from '../../../../../__lib__/helpers/HttpService';
const JobDesc = ({ job }) => {


    const { job_title, job_description, min_salary, salary_currency, max_salary, joining_date, expiry_date, created_at, hourly_rate, tags, job_type, job_vacancy, working_hours, job_referer, job_interviewer, hired, job_bounty, company, referars, country, state, _timezone } = job

    const [showRefer, setShowRefer] = useState(false)
    return (
        <td className="bg-light-info rounded-2" colSpan={5} >
            <div className="" style={{ paddingLeft: '15px' }}>
                <div className='row p-5 ' >
                    <div className='p-5 d-flex gap-5 justify-content-between'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex gap-4 align-items-center'>
                                <img style={{ width: '40px', borderRadius: '50%', height: '40px' }}
                                    src={`${IMAGE_URL}/${company?.company_logo}`} />
                                <h2> {company?.company_name}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="ms-4">
                        <h3 >Job Title: {job_title}</h3>
                        <span className="text-warning"><TimeAgo date={created_at} /></span>
                    </div>
                    <div className='col-sm- col-12 p-5'>
                        <div className='bg-white rounded my-3'>
                            <div className='card-body p-5'>
                                <div className='row'>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1 text-info">
                                                    <i className="fas fa-users text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Job vacancy
                                                </span>
                                                <span className="text-muted fw-bold d-block">{job_vacancy}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fas fa-dollar-sign text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Job bounty
                                                </span>
                                                <span className="text-muted fw-bold d-block">${job_bounty}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fas fa-dollar-sign text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Minimum Salary
                                                </span>
                                                <span className="text-muted fw-bold d-block">
                                                    ${min_salary}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fas fa-dollar-sign text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Maximum Salary
                                                </span>
                                                <span className="text-muted fw-bold d-block">
                                                    ${max_salary}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4">
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fas fa-dollar-sign text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Salary Currency
                                                </span>
                                                <span className="text-muted fw-bold d-block">
                                                    {salary_currency}

                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className='fas fa-list-alt text-info'></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Job Type
                                                </span>
                                                <span className="text-muted fw-bold d-block">{job_type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fa fa-clock text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Working Hours Weekly
                                                </span>
                                                <span className="text-muted fw-bold d-block">{working_hours}h/weekly</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fa fa-calendar text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Joining Date
                                                </span>
                                                <span className="text-muted fw-bold d-block">{joining_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fa fa-calendar text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Expire Date
                                                </span>
                                                <span className="text-muted fw-bold d-block">{expiry_date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {hourly_rate && <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className="fa fa-clock text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Hourly Rate
                                                </span>
                                                <span className="text-muted fw-bold d-block">${hourly_rate !== undefined ? 0 : hourly_rate}/hour</span>
                                            </div>
                                        </div>
                                    </div>}
                                    <div className='col-12 col-sm-4'>
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i className='fas fa-list-alt text-info'></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Tags
                                                </span>
                                                <span className='d-flex gap-2'>
                                                    {tags.map((tag, i) => <Link key={i} href="/admin/tags"><a className="text-muted fw-bold d-block text-hover-primary">{tag.tag_name}</a></Link>)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className="rounded bg-white my-3">
                            <div className="card-body">
                                <div className="bg-light-info p-5">
                                    <h5>Description here</h5>
                                    {parse(job_description)}
                                </div>
                            </div>
                        </div>
                        <div className="rounded my-3 bg-white">
                            <div className="card-body">
                                <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                    <span className="svg-icon svg-icon-info me-5">
                                        <span className="svg-icon svg-icon-1">
                                            <i className="fas fa-map-marker text-info"></i>
                                        </span>

                                    </span>
                                    <div className="flex-grow-1 me-2">
                                        <span className="fw-bolder text-gray-800  fs-6">
                                            <span>Country: {country?.country_name}</span>
                                        </span>
                                        <span className='d-flex flex-column gap-2'>
                                            <span className="text-muted fw-bold d-block ">State: {state?.state_name}</span>
                                            <span className="text-muted fw-bold d-block ">Timezone: {_timezone}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white rounded my-3'>
                            <div className='card-body p-5'>

                                <div onClick={() => setShowRefer(!showRefer)} style={{ width: '90px', cursor: 'pointer' }} className='d-flex gap-3 align-items-center'>
                                    <h2>Referars</h2>
                                    {showRefer ? <span > <i className="fas fa-angle-up fs-2"></i></span>
                                        :
                                        <span ><i className="fa fa-angle-down  fs-2"></i></span>}


                                </div>

                                {showRefer && referars?.map((refer, i) => <div key={i} className=''>

                                    <div className='bg-light-info rounded p-5 my-3'>
                                        <span className="text-warning  d-flex justify-content-end">
                                            <small><TimeAgo date={refer.created_at} />
                                            </small>
                                        </span>
                                        <div className="d-flex align-items-center ">

                                            <div className="flex-grow-1 me-2 border-end">
                                                <h4>Referrer</h4>
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    {refer.referrer_name}
                                                </span>
                                                <span className="text-muted fw-bold d-block">{refer.referrer_email}</span>
                                                <span className="text-muted fw-bold d-block">{refer._referrerurl}</span>
                                            </div>
                                            <div className="flex-grow-1 me-2">
                                                <h4>Candidate</h4>
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    {refer.candidate_name}
                                                </span>
                                                <span className="text-muted fw-bold d-block">{refer.candidate_email}</span>
                                                <span className="text-muted fw-bold d-block">{refer._candidateurl}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </td >
    );
};

export default JobDesc;