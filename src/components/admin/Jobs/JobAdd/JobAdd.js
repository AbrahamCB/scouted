
import Image from 'next/image';
import { Toaster } from 'react-hot-toast';
import JobIcon from '../../../../assets/job-icon.png';
import Layout from './../../Layout/Layout';
import JobForm from './JobForm/JobForm';
const JobAdd = () => {
    return (
        <>
            <Layout>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="container p-5 bg-white ">
                    <div className="w-75 mx-auto p-5 border rounded-1 m-5">
                        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                            <div className="bg-secondary p-3 rounded-circle">
                                <Image src={JobIcon} width='50px' height='44px' alt="img/png" />

                            </div>
                            <h1 style={{ marginTop: '15px' }}>Add Job</h1>
                        </div>

                        <div className="p-5" style={{ marginTop: '30px' }}>
                            <JobForm></JobForm>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default JobAdd;