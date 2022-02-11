import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import Layout from '../Layout/Layout';

const Jobs = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7");
    const dispatch = useDispatch()
    const { jobs, settings } = useSelector(state => state)

    useEffect(() => {

    }, [])

    const { jobList, isLoading } = jobs;
    return (
        <Layout>
            <div className="bg-white container p-5">
                {isLoading && <div className='d-flex justify-content-center'>
                    <ScaleLoader color={color} loading={loading} size={12} />
                </div>}
                {!isLoading && jobList?.length > 0 && <div>
                    <div className="d-flex justify-content-between py-5 ">
                        <h1 className="mt-3">Refers: {jobList.length}</h1>
                    </div>
                    <div id="kt_referrals_1" className="card-body p-0 tab-pane fade show active" role="tabpanel">
                        <div className="table-responsive">

                            <table className="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
                                <thead className="border-gray-200 fs-5 fw-bold bg-lighten">
                                    <tr>
                                        <th className="min-w-175px ps-9"></th>
                                        <th className="min-w-150px px-0">Title</th>
                                        <th className="min-w-350px">Company</th>
                                        <th colSpan={2} className="min-w-125px text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="fs-6 fw-bold text-gray-600">

                                    {/* {jobList?.map((job, i) => <JobList key={i} job={job} />)} */}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>}
                {!isLoading && jobList.length === 0 && <div className="d-flex justify-content-center">
                    <div className='text-center'>
                        <Link href="/admin/jobs/add-job">
                            <a>Add Job</a>
                        </Link>
                        <h1>Empty Job</h1>
                    </div>
                </div>}
            </div>
        </Layout >
    );
};

export default Jobs;

