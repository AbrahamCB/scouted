import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="text-dark order-2 order-md-1 ">
                        <span className="text-muted fw-bold me-1 ">{new Date().getFullYear()}©</span>
                        <Link href="/">
                            <a target="_blank" className="text-gray-800 text-hover-primary">Scouted</a>

                        </Link>
                    </div>
                    {/* <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                        <li className="menu-item">
                            <Link href="https://keenthemes.com/faqs">
                                <a target="_blank" className="menu-link px-2">About</a>

                            </Link>

                        </li>
                        <li className="menu-item">
                            <Link href="https://keenthemes.com/support">
                                <a target="_blank" className="menu-link px-2">Support</a>

                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="https://1.envato.market/EA4JP" >
                                <a target="_blank" className="menu-link px-2">Purchase</a>

                            </Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    );
};

export default Footer;