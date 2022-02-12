import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import img1 from '../../../assets/img1.png';
// import img2 from '../../../assets/img2.png';
import styles from './Banner.module.css';
import Tags from './Tags';
import img1 from '/public/images/bannar-1.jpeg';
import img2 from '/public/images/bannar-2.jpeg';


const Banner = ({ tags }) => {
  const [disable, setDisable] = useState(true)
  const [changeValue, setChangeValue] = useState()
  const router = useRouter()

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setChangeValue(values => ({ ...values, [name]: value }))

    if (value) {
      setDisable(false)

    } else {
      setDisable(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (changeValue?.title) {
      router.push(`/s/${changeValue.title}`)
    } else {
      router.push({
        pathname: '/search',
        query: changeValue,
      })
    }


  }
  return (
    <section className={styles.banner__section}>
      <div className={`container ${styles.banner__continer}`}>
        <div className={styles.banner__row}>
          <div className={styles.banner__info}>
            <h2 className={styles.banner__info_title}>
              Refer Your Friends, Colleagues, or yourself for top opportunities in Africa.
            </h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.banner__findJob}>
                <div className={styles.banner__search}>
                  <i className="fas fa-search"></i>
                  <input
                    onChange={handleChange}
                    name='title'
                    type=""
                    placeholder="What job are you looking for?"
                  />
                </div>
                <div className={styles.banner__search}>
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    name="location"
                    type=""
                    placeholder="Where looking for?"
                    onChange={handleChange} />
                </div>
                <div className={styles.banner__submit}>
                  <input
                    disabled={disable}
                    type="submit"
                    className="btn btn-warning text-black fw-bold fs-4"
                    value="Find Job"
                  />
                </div>
              </div>
            </form>
            <div className={styles.banner__tags}>
              <p>
                <b>Or try a tag:</b>
                <Tags tags={tags} />
              </p>
            </div>
          </div>
          <div className={styles.banner__image}>
            <div className={styles.banner__image_short}>
              <Image src={img1} alt="img/png" />
            </div>
            <div className={styles.banner__image_long}>
              <Image src={img2} alt="img/png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
