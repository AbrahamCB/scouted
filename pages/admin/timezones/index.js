import Timezones from "../../../src/components/admin/Timezone/Timezones";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";
const index = () => {
    return (
        <>
            <Timezones />
        </>
    );
};

export default index;
export const getServerSideProps = adminAuth(context => {
    return {
        props: {}
    }
})