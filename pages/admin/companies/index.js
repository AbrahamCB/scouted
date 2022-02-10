import Companies from "../../../src/components/admin/Company/Companies/Companies";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <Companies />
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})