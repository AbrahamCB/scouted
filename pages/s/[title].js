import Search from "../../src/components/client/search/Search";
import { getData } from './../../__lib__/helpers/HttpService';

const index = ({ jobs }) => {

    return (
        <>
            <Search jobs={jobs} />

        </>
    );
};

export default index;


export async function getServerSideProps(context) {
    const { title } = context.params
    const res = await getData(`/jobs/search/${title}`)
    return {
        props: {
            jobs: res
        }, // will be passed to the page component as props
    }
}