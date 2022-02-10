import Image from 'next/image';
import { Toaster } from 'react-hot-toast';
import companiesIcon from '../../../../assets/companies.png';
import Layout from "../../Layout/Layout";
import CompanyForm from './CompanyForm/CompanyForm';
const AddCompanies = () => {
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
                                <Image src={companiesIcon} width='50px' height='45px' alt="img/png" />

                            </div>
                            {/* <img src={companiesIcon} alt="" /> */}
                            <h1 style={{ marginTop: '15px' }}>Update Company</h1>
                        </div>

                        <div className="p-5" style={{ marginTop: '30px' }}>
                            <CompanyForm />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default AddCompanies;