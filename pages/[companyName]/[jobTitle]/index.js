
import JobDesc from './../../../src/components/client/jobdesc/JobDesc';
import { getData } from './../../../__lib__/helpers/HttpService';

const index = ({ job }) => {
    console.log(job)
    return (
        <>
            <JobDesc jobDetail={job} />
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
    const { companyName, jobTitle } = context.params
    console.log(companyName, jobTitle);
    const res = await getData(`/job/find/${companyName}/${jobTitle}`)
    console.log(res)
    return {
        props: {
            job: res
        }
    }
}