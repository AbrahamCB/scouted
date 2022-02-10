import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../../../../../../store/settings/actions";
import AddCountry from "../../../../Country/AddCountry/AddCountry";
import AddState from "../../../../State/AddState/AddState";
import AddTimezone from "../../../../Timezone/AddTimezone/AddTimezone";

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

               
                {/* <div className={`menu-sub menu-sub-accordion menu-active-bg ${countryMenu && 'show'}`}>
                    <div className="menu-item">
                        <Link href='/admin/countries'>
                            <a className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">All Countries</span>
                            </a>
                        </Link>
                    </div>
                    <div className="menu-item">

                        <span onClick={() => {
                            setTrigger('addcountry')
                            dispatch(modalToggle(settings.modal))
                        }} className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Country</span>
                        </span>

                    </div> */}
                    {/* <div className="menu-item">

                        <span onClick={() => {
                            setTrigger('upcountry')
                            dispatch(modalToggle(settings.modal))
                        }} className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Update Country</span>
                        </span>

                    </div> */}
                {/* </div> */}

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
                {/* <div className={`menu-sub menu-sub-accordion menu-active-bg ${stateMenu && 'show'}`}>

                    <div className="menu-item">
                        <Link href='/admin/states'>
                            <a className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">All State</span>
                            </a>
                        </Link>
                    </div>
                    <div className="menu-item">

                        <span onClick={() => {
                            setTrigger('addstate')
                            dispatch(modalToggle(settings.modal))
                        }} className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add State</span>
                        </span>

                    </div>

                </div> */}
            </div>
            <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${timezoneMenu ? 'hover show' : ''}`}>
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
                {/* <div className={`menu-sub menu-sub-accordion menu-active-bg ${timezoneMenu && 'show'}`}>

                    <div className="menu-item">
                        <Link href='/admin/timezones'>
                            <a className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">All Time Zone</span>
                            </a>
                        </Link>
                    </div>
                    <div className="menu-item">

                        <span onClick={() => {
                            setTrigger('addtimezone')
                            dispatch(modalToggle(settings.modal))
                        }} className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Add Time Zone</span>
                        </span>

                    </div>
                    <div className="menu-item">

                        <span onClick={() => {
                            setTrigger('uptimezone')
                            dispatch(modalToggle(settings.modal))
                        }} className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Update Time Zone</span>
                        </span>

                    </div>
                </div> */}
            </div>
            {/* {trigger === 'addcountry' && <AddCountry />}
            {trigger === 'addstate' && <AddState />}
            {trigger === 'addtimezone' && <AddTimezone />} */}
        </>
    );
};

export default LcoationSubMenu;