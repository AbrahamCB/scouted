
import User from './User/User';
const Header = () => {

    return (
        <>
            <div id="kt_header" style={{}} className="header align-items-stretch">
                <div className="container-fluid d-flex align-items-stretch justify-content-between">
                    <div className="d-flex align-items-center d-lg-none ms-n3 me-1" data-bs-toggle="tooltip" title='true' data-bs-original-title="Show aside menu">
                        <div className="btn btn-icon btn-active-light-primary" id="kt_aside_mobile_toggle">
                            <span className="svg-icon svg-icon-2x mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <rect fill="#000000" x={4} y={5} width={16} height={3} rx="1.5" />
                                        <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                        <a href="index.html" className="d-lg-none">
                            <img alt="Logo" src="/images/Scouted.png" className="h-15px" />
                        </a>
                    </div>
                    <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                        <div className="d-flex align-items-stretch " id="kt_header_nav" >
                            <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: , lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                                {/* <MenuItem /> */}
                            </div>
                        </div>
                        <div className="d-flex align-items-stretch flex-shrink-0">

                            <User></User>

                            <div className="d-flex align-items-center d-lg-none ms-2 me-n3" data-bs-toggle="tooltip" title='true' data-bs-original-title="Show header menu">
                                <div className="btn btn-icon btn-active-light-primary" id="kt_header_menu_mobile_toggle">
                                    {/*begin::Svg Icon | path: icons/stockholm/Text/Toggle-Right.svg*/}
                                    <span className="svg-icon svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                                <rect x={0} y={0} width={24} height={24} />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M22 11.5C22 12.3284 21.3284 13 20.5 13H3.5C2.6716 13 2 12.3284 2 11.5C2 10.6716 2.6716 10 3.5 10H20.5C21.3284 10 22 10.6716 22 11.5Z" fill="black" />
                                                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H3.5C2.6716 17 2 17.6716 2 18.5C2 19.3284 2.6716 20 3.5 20H14.5ZM8.5 6C9.3284 6 10 5.32843 10 4.5C10 3.67157 9.3284 3 8.5 3H3.5C2.6716 3 2 3.67157 2 4.5C2 5.32843 2.6716 6 3.5 6H8.5Z" fill="black" />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;