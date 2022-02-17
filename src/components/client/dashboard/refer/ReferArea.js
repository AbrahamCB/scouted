import Styles from '../Dashboard.module.css';
import ReferTable from './ReferTable';



const ReferArea = ({ job }) => {
    const queryString = require('query-string');

    const { job_title, company, referars } = job
    // const { candidate_name } = refer
    // const newQuery = queryString.stringify({
    //     nested: JSON.stringify({
    //         job: job,
    //         company: company,
    //         previousTags: tags,
    //         referars: referars,
    //         country: country,
    //         state: state,
    //     })
    // });
    return (
        <td colSpan={5} className="bg-light">

            <div>

                <table className={`table table-borderless ${Styles.table}`}>
                    <thead className='text-center'>

                        <tr className=''>
                            <th>Candidate</th>
                            <th className={Styles.table__header}>SCOUTED REC</th>
                            <th className={Styles.table__header}>CANDIDATE STATUS</th>
                            <th>ROLE</th>
                            <th className={Styles.table__header}>SUBMITTED</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>

                        {referars?.map((refer, i) => <ReferTable key={i} job={job} refer={refer} />)}

                    </tbody>
                </table>
            </div>
            {/* <h1>hello world</h1> */}


        </td>
    );
};

export default ReferArea;