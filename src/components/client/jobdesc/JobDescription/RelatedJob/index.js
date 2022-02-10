import styles from '../../JobDesc.module.css';
const RelatedJob = () => {
    return (
        <div className="related__job">
            <h2 className={styles.related__job_title}>Related Job</h2>
            <div className="row">
                <div className="col-12 col-md-6 py-3">
                    {/* <CardGrid /> */}
                </div>
                <div className="col-12 col-md-6 py-3">
                    {/* <CardGrid /> */}
                </div>
            </div>
        </div>
    );
};

export default RelatedJob;