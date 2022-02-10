import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import avatar from '../../../assets/avatar.png';
import styles from './Header.module.css';

const Header = () => {
  const [start, setStart] = useState(false)
  const [status, setStatus] = useState(false)
  const router = useRouter()
  const handleDashboard = () => {
    router.push('/login')
  }

  // useEffect(() => {
  //   const handleWindowClick = () => {
  //     setStatus(false)
  //     setStart(false)
  //   }
  //   if (status || start) {
  //     window.addEventListener('click', handleWindowClick);
  //   } else {
  //     window.removeEventListener('click', handleWindowClick);
  //   }
  //   return () => window.removeEventListener('click', handleWindowClick);
  // }, [start, setStart, status, setStatus])


  return (
    <header className={`${styles.header} navbar-expand-lg`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <div className={styles.header__logo}>
              <Link href="/">
                <a className={styles.header__logo_link}>Talentdrop</a>
              </Link>
            </div>
          </div>
          <nav className="col-4">
            <ul className={styles.header__menu}>
              <li className={styles.header__menu_li}>
                <Link href="#">
                  <a
                    onClick={() => {
                      setStart(!start)
                      setStatus(false)
                    }}
                  >
                    Start Here
                    {start ?
                      <span>
                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                        </svg>
                      </span>
                      :
                      <span>
                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                      </span>
                    }
                  </a>
                </Link>
                <ul className={`${start ? 'show' : ''} dropdown-menu`}>
                  <li className={styles.dropdown__title}>How it works</li>
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className={`${styles.header__menu_li} ''`}>
                <Link href="#">
                  <a onClick={() => {
                    setStatus(!status)
                    setStart(false)
                  }}>
                    Status
                    {status ?
                      <span>
                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                        </svg>
                      </span>
                      :
                      <span>
                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                      </span>
                    }
                  </a>
                </Link>
                <ul className={`${status ? 'show' : ''} dropdown-menu`}>

                  <li className={styles.dropdown__title}>Referrer</li>
                  <li><a className="dropdown-item" href="#">Dashboard</a></li>

                </ul>

              </li>
            </ul>
          </nav>
          <div className="col-4">
            <div className={styles.user}>
              <button className={`${styles.user__cta_button} primary__button`}>
                General Referral
              </button>
              <div className={styles.user__avatar}>
                <div onClick={handleDashboard} className={styles.user__avatar_img}>
                  <Image src={avatar} alt="img/png" />
                </div>
              </div>
              <div className={styles.mobile__menu}>
                <i className="fas fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
