import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LcoationSubMenu = () => {
    const router = useRouter()
    const [countryMenu, setCountryMenu] = useState(router.pathname == '/admin/countries' ? true : false)
    const [stateMenu, setStateMenu] = useState(router.pathname == '/admin/states' ? true : false)
    const [timezoneMenu, setTimezoneMenuMenu] = useState(router.pathname == '/admin/timezones' ? true : false)
    const [trigger, setTrigger] = useState(null)
    const dispatch = useDispatch()
    const { settings } = useSelector(state => state)

    return (
        <>
            <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${countryMenu ? 'hover show' : ''}`}>

                <div className="menu-item">
                    <Link href='/admin/countries'>
                        <a className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Countries</span>
                        </a>
                    </Link>
                </div>
            </div>

            <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${stateMenu ? 'hover show' : ''}`}>
                <div className="menu-item">
                    <Link href='/admin/states'>
                        <a className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">States</span>
                        </a>
                    </Link>
                </div>

            </div>
            {/* <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${timezoneMenu ? 'hover show' : ''}`}>
            <div className="menu-item">
                        <Link href='/admin/timezones'>
                            <a className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Time Zones</span>
                            </a>
                        </Link>
                    </div>
               
            </div> */}

        </>
    );
};

export default LcoationSubMenu;