import States from "../../../src/components/admin/State/States";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <States />
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})