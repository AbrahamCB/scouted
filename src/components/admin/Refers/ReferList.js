
import { useRouter } from 'next/router';
import { useState } from 'react';


const ReferList = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    return (
        <>
            <tr className=''>

                <td className="text-start">
                    <button onClick={() => setIsOpen(!isOpen)} className="btn btn-light btn-sm btn-active-light-primary">
                        <i className="fas fa-angle-down"></i>
                    </button>
                </td>
                <td className="ps-0">{job_title}</td>
                <td>{company?.company_name}</td>
                <td className="text-end">
                    <button onClick={() => router.push({ pathname: `/admin/job/companyslug/jobslug/update`, query: newQuery })} className="btn btn-light-danger btn-sm btn-active-light-primary">
                        <i className="far fa-edit"></i>
                    </button>
                </td>

            </tr>

            <tr >

                {/* {isOpen && <JobDesc job={job} />} */}
            </tr>
        </>
    );
};

export default ReferList;