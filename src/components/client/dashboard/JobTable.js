
import { useState } from 'react';
import ReferArea from './refer/ReferArea';

const JobTable = ({ job }) => {

    const { job_title, company } = job
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <>
            <tr>

                <td className="text-start">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-light btn-sm btn-active-light-primary">
                        <i className="fas fa-angle-down"></i>
                    </button>
                </td>
                <td className="ps-0">{job_title}</td>
                <td>{company?.company_name}</td>
                <td className="text-end">
                    {/* <a className="btn btn-light-danger btn-sm btn-active-light-primary">
                        <i className="far fa-edit"></i>
                    </a> */}
                </td>

            </tr>
            <tr>
                {isOpen && <ReferArea job={job} />}
            </tr>
        </>
    );
};

export default JobTable;