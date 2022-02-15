import CompanyDetail from "../../../src/components/client/companyDetail";
import { getData } from "../../../__lib__/helpers/HttpService";

const index = ({ company, jobs }) => {
    return (
        <>
            <CompanyDetail companyDetail={company} jobs={jobs} />
        </>
    );
};

export default index;


// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: 'blocking'
//     }
// }

export async function getServerSideProps(context) {
    const { company_slug } = context.params

    const res = await getData(`/company/slug/${company_slug}`)
    const jobs = await getData(`/jobs/company/${company_slug}`)

    return {
        props: {
            company: res,
            jobs: jobs
        }
    }
}