
import Link from 'next/link';
import { useState } from 'react';
const JobsSubMenu = ({ menuItem }) => {
    const [subMenu, setSubMenu] = useState(false)
    const [blog, setBlog] = useState(false)
    return (
        <>
            <div className={`menu-sub menu-sub-accordion menu-active-bg ${menuItem ? 'show' : ''}`} kt-hidden-height={195} style={{}}>
                <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${subMenu ? 'hover show' : ''}`}>
                    <span className="menu-link" onClick={() => setSubMenu(!subMenu)}>
                        <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Profile</span>
                        <span className="menu-arrow" />
                    </span>
                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${subMenu && 'show'}`}>
                        <div className="menu-item">
                            <Link href='/admin/jobs/profile/overview'>
                                <a className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                    </span>
                                    <span className="menu-title">Overview</span>
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="menu-item">
                    <Link href='/admin/jobs/profile/overview'>
                        <a className="menu-link">
                            <span className="menu-bullet">
                                <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Overview</span>
                        </a>
                    </Link>
                </div>
                <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${blog ? 'hover show' : ''}`}>
                    <span className="menu-link" onClick={() => setBlog(!blog)}>
                        <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog</span>
                        <span className="menu-arrow" />
                    </span>
                    <div className={`menu-sub menu-sub-accordion menu-active-bg ${blog && 'show'}`}>
                        <div className="menu-item">
                            <Link href='/admin/jobs/profile/overview'>
                                <a className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot" />
                                    </span>
                                    <span className="menu-title">Blog Home</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobsSubMenu;