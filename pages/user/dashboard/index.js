import { userAuth } from '../../../__lib__/helpers/requireAuthentication';
import Dashboard from './../../../src/components/client/dashboard/Dashboard';

const index = () => {
    return (
        <>
            <Dashboard></Dashboard>

        </>
    )
}
export default index;

export const getServerSideProps = userAuth(context => {
    return {
        props: {}
    }
})