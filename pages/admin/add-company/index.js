import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";
import AddCompanies from './../../../src/components/admin/Company/AddCompany/AddCompany';

const index = () => {
    return (
        <>
            <AddCompanies />
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})