import Tag from '../../src/components/client/Tag';
import { getData } from '../../__lib__/helpers/HttpService';

const index = ({ jobs }) => {

    return (
        <Tag jobs={jobs}></Tag>
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
    const { tag_slug } = context.params

    const res = await getData(`jobs/tag/${tag_slug}`)
    return {
        props: {
            jobs: res,

        }
    }
}