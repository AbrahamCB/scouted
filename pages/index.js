
import Head from 'next/head';
import { getData } from '../__lib__/helpers/HttpService';
import Banner from './../src/components/client/banner/Banner';
import Cards from './../src/components/client/cards/Cards';
import Layout from './../src/components/client/layout/index';
import TrustedCompany from './../src/components/client/trustedCompanies/TrustedCompany';


function index({ jobs, generalJob, tags }) {

  return (
    <>
      <Head>
        <title>Scounted</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Layout>
        <Banner tags={tags} />
        <TrustedCompany />
        <Cards jobs={jobs} generalJob={generalJob} />
      </Layout>
    </>
  );
}
export default index

export async function getStaticProps() {
  const res = await getData('/jobs')
  const general = await getData('/job/6')
  const tags = await getData('/tags')
  return {
    props: {
      jobs: res,
      generalJob: general,
      tags: tags
    }
  }
}
