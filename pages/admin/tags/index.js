import Tags from "../../../src/components/admin/Tags/Tags";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const index = () => {
    return (
        <>
            <Tags></Tags>
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})
