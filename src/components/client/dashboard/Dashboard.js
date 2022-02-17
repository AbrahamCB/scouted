import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { getUserData } from '../../../../__lib__/helpers/HttpService';
import Layout from '../layout';
import JobTable from './JobTable';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7");
    const dispatch = useDispatch()
    const { users } = useSelector(state => state)
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getUserData('/refer/jobs', users.token)
            .then(res => {
                setLoading(false)
                setJobs(res)

            })
    }, [])
    console.log(jobs)
    return (
        <>
            <Layout>
                <div className='container-md pt-5'>
                    <div className='mt-5'>
                        <h1 className='text-center display-5'>Referrer: Dashboard</h1>


                        {loading && <div className='d-flex justify-content-center py-11'>
                            <ScaleLoader color={color} loading={loading} size={12} />
                        </div>}

                        {
                            jobs.length > 0 && <div className="table-responsive">

                                <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                    <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                        <tr>
                                            <th className="min-w-175px ps-9"></th>
                                            <th className="min-w-150px px-0">Title</th>
                                            <th className="min-w-350px">Company</th>
                                            {/* <th colSpan={2} className="min-w-125px text-end">Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="fs-6 fw-bold text-gray-600">
                                        {jobs?.map((job, i) => <JobTable key={i} job={job} />)}
                                    </tbody>
                                </table>
                            </div>
                        }
                        {jobs.length === 0 && loading === false && <div className='d-flex justify-content-center'>
                            <p style={{ width: '43%' }} className="fs-3 my-10 bg-light p-5 rounded-2 text-center">If you&apos;re a bounty hunter, any referrals you make will show up here.
                                Check out <strong>the bounty</strong> board and claim some bounties!</p>
                        </div>}
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard;