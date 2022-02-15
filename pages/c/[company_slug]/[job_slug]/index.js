
import { getData } from '../../../../__lib__/helpers/HttpService';
import JobDesc from './../../../../src/components/client/jobdesc/JobDesc';

const index = ({ job }) => {

    return (
        <>
            <JobDesc jobDetail={job} />
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
    const { company_slug, job_slug } = context.params

    const res = await getData(`/job/find/${company_slug}/${job_slug}`)

    return {
        props: {
            job: res
        }
    }
}