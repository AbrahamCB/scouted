import Link from 'next/link';
import styles from './Footer.module.css';


export default function Footer() {
  return (
    <footer className={styles.footer__main}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-7">
            <div className={`${styles.footer__info} text-center`}>
              <div className={styles.footer__logo}>

                <Link href="/">

                  <a className={styles.header__logo_link}>
                    <img width="25" src="/images/Scouted.png" alt="scouted" />
                  </a>
                </Link>
              </div>
              {/* <p className={styles.footer__desc}>
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour
              </p> */}
              <nav className={styles.footer__menu}>
                <ul>
                  <li>
                    <Link href="/about-us">
                      <a>our team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <a>terms of use</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>privacy policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-referrers">
                      <a>for referrers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/for-employers">
                      <a>for employers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a>pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>contact us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className={styles.footer__social}>
                <div className={styles.footer__social_item}>
                  <Link href="https://www.facebook.com/careerbuddyafrica">
                    <a>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="https://twitter.com/careerbuddyhq">
                    <a>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="https://www.instagram.com/careerbuddyhq/">
                    <a>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Link>
                </div>
                <div className={styles.footer__social_item}>
                  <Link href="https://www.linkedin.com/company/thecareerbuddy/?viewAsMember=true">
                    <a>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Link>
                </div>
                {/* <div className={styles.footer__social_item}>
                  <Link href="/">
                    <a>
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </Link>
                </div> */}
              </div>
              <p className={styles.footer__copyright}>

                Copyright &copy; {new Date().getFullYear()} Scouted Ltd. All rights reserved.

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
