import Dashboard from './../../../src/components/client/dashboard/Dashboard';
import { userAuth } from './../../../__lib__/helpers/requireAuthentication';

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