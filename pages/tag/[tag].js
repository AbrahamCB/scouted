import { useRouter } from "next/router";
import Tag from '../../src/components/client/Tag';
const index = () => {
    const router = useRouter()
    const tagName = router.query.tag
    return (
        <Tag></Tag>
    );
};

export default index;