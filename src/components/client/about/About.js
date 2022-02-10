
import Layout from './../layout/index';
import styles from './About.module.css';

const teams = [
    { id: 1, name: "Madeleine Nguyen", profession: "Co-Founder / CEO", img: "https://www.talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmaddy.13bdfab7.jpeg&w=640&q=75" },
    { id: 2, name: "Janelle Tiulentino", profession: "Co-Founder / CTO", img: "https://www.talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjanelle.fe61f4a0.jpeg&w=256&q=75" },
    { id: 3, name: "Grace Quigley", profession: "Ops Lead", img: "https://www.talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgrace.474d6618.jpg&w=256&q=75" },
    { id: 4, name: "Nick Starkey", profession: "Scouted Partner", img: "https://www.talentdrop.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnick.9c7236b2.jpg&w=256&q=75" }
]
const About = () => {
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className=''>
                        <div className="text-center mb-5">

                        </div>
                        <div className={styles.team__area}>
                            <h1 className={styles.team__title}>Our Team</h1>
                            <div className="row">
                                {teams.map((team, i) => (
                                    <div key={i} className="col-sm-12 col-md-6 col-lg-3  mb-5 ">
                                        <div className={styles.team__card}>
                                            <img src={team.img} />
                                            <h3>{team.name}</h3>
                                            <h6>{team.profession}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;