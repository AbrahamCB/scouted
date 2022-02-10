import Countries from "../../../src/components/admin/Country/Countries";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <Countries></Countries>
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})