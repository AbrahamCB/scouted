
const CompanySubMenu = ({ menuItem }) => {

    return (
        <>
            <div className={`menu-sub menu-sub-accordion menu-active-bg ${menuItem ? 'show' : ''}`} kt-hidden-height={195} style={{}}>
                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                        <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Profile</span>
                        <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div className="menu-item">
                            <a className="menu-link" href="pages/profile/overview.html">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Overview</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                    <span className="menu-link">
                        <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Blog</span>
                        <span className="menu-arrow" />
                    </span>
                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                        <div className="menu-item">
                            <a className="menu-link" href="pages/blog/home.html">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Blog Home</span>
                            </a>
                        </div>
                        <div className="menu-item">
                            <a className="menu-link" href="pages/blog/post.html">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot" />
                                </span>
                                <span className="menu-title">Blog Post</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanySubMenu;