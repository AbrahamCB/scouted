import Image from 'next/image';
import companiesIcon from '../../../../assets/companies.png';
import Layout from '../../Layout/Layout';
import UpdateForm from './UpdateForm/UpdateForm';

const UpdateCompany = () => {

    return (
        <>
            <Layout>
                <div className="container p-5 bg-white ">
                    <div className="w-75 mx-auto p-5 border rounded-1 m-5">
                        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                            <div className="bg-secondary p-3 rounded-circle">
                                <Image src={companiesIcon} width='50px' height='45px' alt="img/png" />

                            </div>
                            {/* <img src={companiesIcon} alt="" /> */}
                            <h1 style={{ marginTop: '15px' }}>Update Company</h1>
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

export default UpdateCompany;