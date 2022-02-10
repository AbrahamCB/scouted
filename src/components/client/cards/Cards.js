import { useState } from 'react';
import CardRow from '../cardrow/CardRow';
import CardGrid from './../card/CardGrid';
import styles from './Cards.module.css';

export default function Cards({ jobs }) {
  const [toggle, setToggle] = useState({ isGrid: false, isRow: true })

  return (
    <section className={styles.cards__section}>
      <div className={`${styles.toggle__container} container`}>
        <div className="row justify-content-end">
          <div className="col-6 d-flex justify-content-end">
            <div className={styles.card__view_toggler}>


              <label htmlFor={styles.toggler__switch}>
                <span onClick={() => setToggle({ isGrid: false, isRow: true })} className={`${toggle.isRow ? styles.active : styles.toggler__list}`}>
                  <span>
                    <i className="fas fa-list"></i>
                  </span>
                </span>
              </label>


              <label htmlFor={styles.toggler__switch}>
                <span onClick={() => setToggle({ isGrid: true, isRow: false })} className={`${toggle.isGrid ? styles.active : styles.toggler__grid}`}>
                  <span className={`${toggle.isGrid && styles.active}`}>
                    <i className="fas fa-th">
                    </i>
                  </span>
                </span>
              </label>

            </div>
          </div>
        </div>
        <div className="container">
          {toggle.isGrid &&
            <div className={`${styles.card__row} row`}>

              {jobs.map((job, i) => (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4 p-3 text-center">
                  <CardGrid job={job} key={i} />
                </div>
              ))}
            </div>
          }
          {toggle.isRow &&
            <div className="row">
              <div className="col-12 ">
                <div className={styles.card__row}>
                  {/* {jobs.map((job, i) => { <CardRow key={i} job={job} /> })} */}
                  {
                    jobs.map((job, i) => <CardRow key={i} job={job} />)
                  }

                </div>
              </div>
            </div>}
        </div>
      </div>
    </section>
  );
}
