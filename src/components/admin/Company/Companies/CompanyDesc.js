import { IMAGE_URL } from "../../../../../__lib__/helpers/HttpService";

const CompanyDesc = ({ company }) => {
    const { company_name, company_description, company_logo, website_url, employee_number, founded_date, facebook_url, twitter_url, linkedin_url, instagram_url, country, state, _timezone, status, created_at } = company

    return (
        <td className="bg-light-info " colSpan={5}>
            <div className="" style={{ paddingLeft: '15px' }}>
                <div className='row p-5' >
                    <div className='p-5 d-flex gap-5 justify-content-between'>
                        <div className=' d-flex justify-content-center'>
                            <div className='d-flex gap-4 align-items-center'>
                                <img style={{ width: '50px', borderRadius: '50%', height: '40px' }}
                                    src={`${IMAGE_URL}/${company_logo}`} />
                                <h2> {company_name}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-4'>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Founded Date: {founded_date}</h6>
                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Employee Number: {employee_number}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Website: {website_url}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Facebook: {facebook_url}</h6>
                            </div>
                        </div>

                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Instagram: {instagram_url}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Twitter: {twitter_url}</h6>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <h6>Linkedin: {linkedin_url}</h6>
                            </div>
                        </div>

                    </div>
                    <div className='col-5 p-5'>
                        <div className="border my-3">
                            <div className="card-body">
                                <h5>Description here</h5>
                                <p>{company_description}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>Country: {country?.country_name}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>State: {state?.state_name}</p>

                            </div>
                        </div>
                        <div className="border my-3">
                            <div className="card-body">
                                <p>Timezone: {_timezone}</p>

                            </div>
                        </div>



                    </div>
                    <div className='col-3'>

                    </div>

                </div>
            </div>
        </td>
    );
};

export default CompanyDesc;