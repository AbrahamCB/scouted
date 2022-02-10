import Jobs from "../../../src/components/admin/Jobs/Jobs/Jobs";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <Jobs></Jobs>
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})