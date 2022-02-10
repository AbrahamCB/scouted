import UpdateJob from "../../../../../src/components/admin/Jobs/UpdateJob/UpdateJob";
import { adminAuth } from "../../../../../__lib__/helpers/requireAuthentication";

const update = () => {
    return (
        <>
            <UpdateJob />
        </>
    );
};

export default update;

export const getServerSideProps = adminAuth(context => {

    return {
        props: {}


    }
})