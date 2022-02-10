import JobAdd from "../../../../src/components/admin/Jobs/JobAdd/JobAdd";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <JobAdd></JobAdd>
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})