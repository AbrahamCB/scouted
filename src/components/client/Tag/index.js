import Head from 'next/head';
import { useRouter } from "next/router";
import CardRow from '../cardrow/CardRow';
import Layout from '../layout';
import styles from './Tag.module.css';
const Tag = ({ jobs }) => {
    const router = useRouter()
    const tagSlug = router.query.tag_slug

    return (
        <Layout>
            <Head>
                <title>#{tagSlug} on Scouted</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section>
                <div className={`${styles.toggle__container} container`}>
                    <div className="text-center mb-5">
                        <h1 className={styles.tag_title}>#{tagSlug} on Scouted</h1>
                        <p className={styles.tag_text}>Check out jobs tagged <span>{tagSlug}</span> here.</p>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            {jobs.map((job, i) => <CardRow key={i} job={job} />)}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Tag;