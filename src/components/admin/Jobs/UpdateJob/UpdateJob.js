
import Image from 'next/image';
import JobIcon from '../../../../assets/job-icon.png';
import Layout from '../../Layout/Layout';
import UpdateForm from './UpdateForm/UpdateForm';
// import JobForm from './JobForm';
const UpdateJob = () => {
    return (
        <>
            <Layout>
                <div className="container p-5 bg-white ">
                    <div className="w-75 mx-auto p-5 border rounded-1 m-5">
                        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                            <div className="bg-secondary p-3 rounded-circle">
                                <Image src={JobIcon} width='50px' height='44px' alt="img/png" />

                            </div>
                            <h1 style={{ marginTop: '15px' }}>Update Job</h1>
                        </div>

                        <div className="p-5" style={{ marginTop: '30px' }}>
                            <UpdateForm />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default UpdateJob;