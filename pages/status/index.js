import Status from "../../src/components/client/status/Status";
import { userAuth } from './../../__lib__/helpers/requireAuthentication';

const index = () => {
    return (
        <>
            <Status />
        </>
    );
};

export default index;


export const getServerSideProps = userAuth(context => {
    return {
        props: {}
    }
})