import Head from 'next/head';
import { useRouter } from "next/router";
import Layout from '../layout';
import styles from './Tag.module.css';
const Tag = () => {
    const router = useRouter()
    const tagName = router.query.tag
    return (
        <Layout>
            <Head>
                <title>#{tagName} on Talentdrop</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section>
                <div className={`${styles.toggle__container} container`}>
                    <div className="text-center mb-5">
                        <h1 className={styles.tag_title}>#{tagName} on Talentdrop</h1>
                        <p className={styles.tag_text}>Check out jobs tagged <span>{tagName}</span> here.</p>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            {/* <CardRow /> */}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Tag;