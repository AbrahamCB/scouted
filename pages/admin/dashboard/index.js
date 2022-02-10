
import Admin from '../../../src/components/admin/Admin';
import { adminAuth } from '../../../__lib__/helpers/requireAuthentication';

const index = () => {
    return (
        <>
            <Admin></Admin>
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})