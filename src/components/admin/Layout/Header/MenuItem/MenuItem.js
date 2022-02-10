import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';

const MenuItem = () => {

    const router = useRouter()
    const { pathname } = router
    const [selectMenu, setSelectMenu] = useState(false)
    return (
        <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
            <div className="menu-item me-lg-1">
                <Link href='/admin/dashboard'>
                    <a className={`menu-link py-3 ${pathname == '/admin/dashboard' && 'active'}`}>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </Link>
            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
                <Link href='/admin/jobcategory'>
                    <a>
                        <span className={`menu-link py-3 ${pathname == '/admin/jobcategory' && 'active'}`}>
                            <span className="menu-title">Job Category</span>
                            <span className="menu-arrow d-lg-none" />
                        </span>
                    </a>
                </Link>

            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-lg-1">
                <Link href='/admin/tags'>
                    <a>
                        <span className={`menu-link py-3 ${pathname == '/admin/tags' && 'active'}`}>
                            <span className="menu-title">Tags</span>
                            <span className="menu-arrow d-lg-none" />
                        </span>
                    </a>
                </Link>

            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className={`menu-item menu-lg-down-accordion me-lg-1 ${selectMenu ? 'show menu-dropdown' : ''}`}>
                <Link href='/admin/companies'>
                    <a>
                        <span className={`menu-link py-3 ${pathname == '/admin/companies' && 'active'}`}>
                            <span className="menu-title">Companies</span>
                            <span className="menu-arrow d-lg-none" />
                        </span>
                    </a>
                </Link>

            </div>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" className={`menu-item menu-lg-down-accordion me-lg-1 ${selectMenu ? 'show menu-dropdown' : ''}`}>
                <Link href='/admin/add-company'>
                    <a>
                        <span className={`menu-link py-3 ${pathname == '/admin/add-company' && 'active'}`}>
                            <span className="menu-title">Add Company</span>
                            <span className="menu-arrow d-lg-none" />
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default MenuItem;