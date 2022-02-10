import CompanyDetail from "../../src/components/client/companyDetail";
import { getData } from './../../__lib__/helpers/HttpService';

const index = ({ company }) => {
    return (
        <>
            <CompanyDetail companyDetail={company} />
        </>
    );
};

export default index;


export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { companyName } = context.params

    const res = await getData(`/company/slug/${companyName}`)

    return {
        props: {
            company: res
        }
    }
}