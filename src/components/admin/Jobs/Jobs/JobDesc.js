
import parse from 'html-react-parser';
import Link from 'next/link';
import TimeAgo from 'react-timeago';
const JobDesc = ({ job }) => {


    const { job_title, job_description, job_salary, joining_date, expiry_date, created_at, hourly_rate, tags, job_condition, job_type, job_vacancy, working_hours, job_referer, job_interviewer, hired, job_bounty, company, referars, country, state, _timezone } = job

    return (
        <td className="bg-light-info rounded-2" colSpan={5} >
            <div className="" style={{ paddingLeft: '15px' }}>
                <div className='row p-5 ' >
                    <div className='p-5 d-flex gap-5 justify-content-between'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex gap-4 align-items-center'>
                                <img style={{ width: '40px', borderRadius: '50%', height: '40px' }} src="https://www.seekpng.com/png/detail/267-2675194_00106-3d-company-logos-design-free-logo-online.png" />
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
                                                    <i class="fas fa-dollar-sign text-info"></i>
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
                                    <dvi className="col-12 col-sm-4">
                                        <div className="d-flex align-items-center bg-light-info rounded p-5 my-3">
                                            <span className="svg-icon svg-icon-info me-5">
                                                <span className="svg-icon svg-icon-1">
                                                    <i class="fas fa-dollar-sign text-info"></i>
                                                </span>

                                            </span>
                                            <div className="flex-grow-1 me-2">
                                                <span className="fw-bolder text-gray-800  fs-6">
                                                    Job Salary
                                                </span>
                                                <span className="text-muted fw-bold d-block">${job_salary}/month</span>
                                            </div>
                                        </div>
                                    </dvi>
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
                                                <span className="text-muted fw-bold d-block">{hourly_rate}/hour</span>
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
                                                    {tags.map((tag, i) => <Link href="/admin/tags"><a key={i} className="text-muted fw-bold d-block text-hover-primary">{tag.tag_name}</a></Link>)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className=" rounded bg-light-warning my-3">
                            <div className="card-body p-5">
                                <h5>Description here</h5>
                                {parse(job_description)}
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
                    </div>
                </div>
            </div>
        </td>
    );
};

export default JobDesc;