import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { userLogout } from '../../../../store/users/actions';
import avatar from '../../../assets/avatar.png';
import styles from './Header.module.css';
const Header = () => {
  const cookies = new Cookies();
  const [start, setStart] = useState(false)
  const [status, setStatus] = useState(false)
  const [smallDevice, setSmallDevice] = useState(false)
  const router = useRouter();
  const { users } = useSelector(state => state)
  const dispatch = useDispatch()


  const handleDashboard = () => {
    if (!users?.token)
      router.push('/login')
  }

  const handleLogOut = () => {
    cookies.remove('user_token', { path: '/' });
    if (!cookies.get('user_token')) {
      toast.success('Logout success')
      dispatch(userLogout())
      router.push('/login')
    }
  }

  return (
    <header className={`${styles.header} navbar-expand-lg`}>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <div className={styles.header__logo}>
              <Link href="/">
                <a >
                  <img src="/images/scouted1.png" className='w-100 w-sm-50' alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <nav className="col-4">
            <ul className={styles.header__menu}>
              <li className={styles.header__menu_li}>
                <Link href="/">
                  <a
                    id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"
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
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li className={styles.dropdown__title}>How it works</li>
                  <li><Link href="/for-referrers"><a className="dropdown-item" >Referring on Scouted</a></Link></li>
                  <li><Link href="/hiring"><a className="dropdown-item" >Hiring on Scouted</a></Link></li>
                </ul>
              </li>

              <li className={`${styles.header__menu_li} ''`}>
                <Link href="/">
                  <a id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">

                  <li className={styles.dropdown__title}>Referrer</li>
                  <li>
                    <Link href="/user/dashboard">
                      <a className="dropdown-item">Dashboard</a>
                    </Link>
                  </li>

                </ul>

              </li>
            </ul>
          </nav>
          <div className="col-4">
            <div className={styles.user}>
              <button onClick={() => router.push('/r/scouted/general-referral')} className={`btn btn-warning text-black fw-bold fs-4`}>
                General Referral
              </button>
              <div className={styles.user__avatar}>
                <div onClick={handleDashboard} className={styles.user__avatar_img}
                  id={users.token && "navbarDarkDropdownMenuLink"}
                  role={users.token && "button"}
                  data-bs-toggle={users.token && "dropdown"}
                  aria-expanded={users.token && "false"} >
                  <Image src={avatar} alt="img/png" />
                </div>
                {users.token &&
                  <ul className="dropdown-menu mt-5" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Proflile</a></li>
                    <li className={styles.user__logout}>
                      <button className='dropdown-item btn' onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                }
              </div>
              <div className={styles.mobile__menu}>
                <i onClick={() => setSmallDevice(!smallDevice)} className="fas fa-bars"></i>
              </div>
            </div>
          </div>

          {/* small devices nav */}

          {smallDevice && <nav className={styles.mobile__nav}>
            <ul className={styles.nav__ul} >
              <li className={styles.nav__title}>How it works</li>
              <li><a className="" href="#">Referring on Scouted</a></li>
              <li><a className="" href="#">Hiring of Scouted</a></li>
            </ul>
            <ul className={styles.nav__ul} >
              <li className={styles.nav__title}>Status</li>

              <li><Link href="/user/dashboard">
                <a >Dashboard</a>
              </Link></li>
            </ul>
          </nav>}

        </div>
      </div>
    </header >
  );
};

export default Header;
