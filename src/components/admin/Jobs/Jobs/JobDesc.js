
const JobDesc = ({ job }) => {


    const { job_title, job_description, job_salary, job_condition, job_vacancy, job_referer, job_interviewer, hired, job_bounty, company, tags, referars, country, state, timezone } = job

    return (
        <td className="bg-info rounded-2" colSpan={5} >
            <div className="" style={{ paddingLeft: '15px' }}>
                <div className='row p-5 text-white' >
                    <div className='p-5 d-flex gap-5 justify-content-between'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex gap-4 align-items-center'>
                                <img style={{ width: '40px', borderRadius: '50%', height: '40px' }} src="https://www.seekpng.com/png/detail/267-2675194_00106-3d-company-logos-design-free-logo-online.png" />
                                <h2> {company?.company_name}</h2>
                            </div>
                        </div>

                    </div>
                    <h3 className="ms-3">Job Title: {job_title}</h3>
                    <div className="table-responsive">
                        <table className="table text-white">
                            <thead>
                                <tr>
                                    <th>Salary</th>
                                    <th className="text-center">Vacancy</th>
                                    <th className="text-center">Referer</th>
                                    <th className="text-center">Bounty</th>
                                    <th className="text-center">Interviewer</th>
                                    <th className="text-center">Hired</th>
                                    <th className="text-center">Condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{job_salary}</td>
                                    <td className="text-center">{job_vacancy}</td>
                                    <td className="text-center">{job_referer}</td>
                                    <td className="text-center">{job_bounty}</td>
                                    <td className="text-center">{job_interviewer}</td>
                                    <td className="text-center">{hired}</td>
                                    <td className="text-center">{job_condition}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='p-5 col-sm-3 col-12  text-white'>


                        <div className="border rounded my-3">
                            <div className="card-body">
                                <p>Salary: ${job_salary}</p>

                                <p>Vacancy: {job_vacancy}</p>

                                <p>Referer: {job_referer}</p>

                                <p>Bounty: ${job_bounty}</p>

                                <p>Interviewer: {job_interviewer}</p>

                                <p>Hired: {hired}</p>

                                <p>Condition: {job_condition}</p>

                            </div>

                        </div>
                        <div className="border rounded my-3">
                            <div className="card-body">


                            </div>
                        </div>
                        <div className="border rounded my-3">
                            <div className="card-body">


                            </div>
                        </div>
                        <div className="border rounded my-3">
                            <div className="card-body">

                            </div>
                        </div>

                        <div className="border rounded my-3">
                            <div className="card-body">


                            </div>
                        </div>
                        <div className="border rounded my-3">
                            <div className="card-body">


                            </div>
                        </div>
                        <div className="border rounded my-3">
                            <div className="card-body">


                            </div>
                        </div>


                    </div> */}

                    <div className="col-12 col-sm-4 p-5 text-white">
                        <div className="border rounded my-3">
                            <div className="card-body">
                                <span>Country: {country?.country_name}</span>
                                <br />
                                <span>State: {state?.state_name}</span>
                                <br />
                                <span>Timezone: {timezone?._zone_name_}</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4 p-5 text-white'>
                        <div className="border rounded my-3">
                            <div className="card-body">
                                <h5>Description here</h5>
                                <p>{job_description}</p>

                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </td>
    );
};

export default JobDesc;