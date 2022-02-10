import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTags } from '../../../../store/tags/actions';
import styles from './Banner.module.css';
const Tags = () => {
    const [showAllTag, setShowAllTag] = useState(false)
    const dispatch = useDispatch()
    const { tags } = useSelector(state => state)
    useEffect(() => {
        dispatch(setTags())
    }, [])
    const { tagList } = tags
    const sortTags = tagList?.slice(0, 6)
    return (
        <>
            {showAllTag ? <span> {tagList?.map((tag, i) => (
                <Link href={`/tag/${tag.tag_slug}`} key={i}>
                    <a className={styles.banner_tag_names}>{tag.tag_name}{tagList.length - 1 === i ? '' : ','}</a>
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