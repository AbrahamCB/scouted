import Link from 'next/link';
import { useState } from 'react';
import styles from './Banner.module.css';
const Tags = ({ tags }) => {
    const [showAllTag, setShowAllTag] = useState(false)
    // const dispatch = useDispatch()
    // const { tags } = useSelector(state => state)
    // useEffect(() => {
    //     dispatch(setTags())
    // }, [])
    // const { tagList } = tags
    const sortTags = tags?.slice(0, 6)
    return (
        <>
            {showAllTag ? <span> {tags?.map((tag, i) => (
                <Link href={`/tag/${tag.tag_slug}`} key={i}>
                    <a className={styles.banner_tag_names}>{tag.tag_name}{tags.length - 1 === i ? '' : ','}</a>
                </Link>
            ))} </span> : <span>
                {sortTags?.map((tag, i) => (
                    <Link href={`/tag/${tag.tag_slug}`} key={i}>
                        <a className={styles.banner_tag_names}>{tag.tag_name}{sortTags.length - 1 === i ? '...' : ','}</a>
                    </Link>
                ))}
            </span>}

            <span className={styles.see__all_tags} onClick={() => setShowAllTag(!showAllTag)}>{showAllTag ? 'collapse' : 'See All Tags'}</span>

        </>
    );
};

export default Tags;