import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../../../__lib__/helpers/HttpService';
import Layout from '../layout';
import Styles from './Dashboard.module.css';
import TableList from './TableList';

const Dashboard = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state)
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        getUserData('/refer/jobs', users.token)
            .then(res => {
                setJobs(res)
            })
    }, [])
    return (
        <>
            <Layout>
                <div className='container-md pt-5'>
                    <div className='mt-5'>
                        <h1 className='text-center display-5'>Referrer: Dashboard</h1>
                        <div className=''>

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

                                    <TableList />

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard;