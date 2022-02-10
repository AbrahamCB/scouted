import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import { adminLogout } from "../../../../../../store/admins/actions";
import adminPic from '../../../../../assets/admin-pic.jpeg';
const User = () => {
    const cookies = new Cookies();
    const dispatch = useDispatch()
    const router = useRouter()
    const [selectProfile, setSelectProfile] = useState(false)
    const { admins } = useSelector(state => state)
    const { admin } = admins

    const handleSignOut = () => {
        cookies.remove('_token', { path: '/' });
        if (!cookies.get('_token')) {
            toast.success('Logout success')
            dispatch(adminLogout())
            router.push('/admin/login')
        }

    }
    return (
        <>
            <div className={`d-flex align-items-center ms-1 ms-lg-3 ${selectProfile ? 'show menu-dropdown' : ''}`} id="kt_header_user_menu_toggle">
                <div onClick={() => setSelectProfile(!selectProfile)} className="cursor-pointer symbol symbol-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
                    <Image className="rounded-circle" width="30px" height="30px" src={adminPic} alt="metronic" />
                </div>
                <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px ${selectProfile ? 'show' : ''}`} data-kt-menu="true"
                    style={{ zIndex: 105, position: 'fixed', margin: '0px', transform: 'translate(1598px, 65px)', inset: '0px auto auto 0px' }}>
                    <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                            <div className="symbol symbol-50px me-5">
                                <Image className="rounded-circle" width="30px" height="30px" alt="Logo" src={adminPic} />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="fw-bolder d-flex align-items-center fs-5">{admin?.name}
                                </div>
                                <Link href="/">
                                    <a className="fw-bold text-muted text-hover-primary fs-7">{admin?.email}</a>

                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="separator my-2" />
                    <div className="menu-item px-5">
                        <span onClick={() => handleSignOut()} className="menu-link px-5"> Sign Out</span>

                    </div>
                </div>
            </div>
        </>
    );
};

export default User;