

import Layout from '../layout';
import styles from './JobDesc.module.css';
import JobDescription from './JobDescription';
import JobInformation from './JobInformation';

export default function JobDesc({ jobDetail }) {
  // console.log(jobDetail)

  return (
    <Layout>
      <section className={styles.job__description}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <JobDescription jobDetail={jobDetail} />
            </div>
            <JobInformation jobDetail={jobDetail} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
