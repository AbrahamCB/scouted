import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";
import ContactMessage from './../../../src/components/admin/ContactMessage/ContactMessage';


const index = () => {

    return (
        <>
            <ContactMessage />
        </>
    );
};

export default index;

export const getServerSideProps = adminAuth(context => {

    return {
        props: {}
    }
})
