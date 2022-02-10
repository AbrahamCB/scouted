import { useState } from 'react';
import Layout from '../Layout';
import Styles from './Dashboard.module.css';
const Dashboard = () => {
    const [isTrue, setIstrue] = useState({
        candidate: false,
        talentdropRec: false,
        status: false,
        role: false,
        submited: false
    })
    const [isTrueSecond, setIstrueSecond] = useState({
        candidate: false,
        talentdropRec: false,
        status: false,
        role: false,
        submited: false
    })

    const selectedItem = (item) => {

        setIstrue({
            candidate: item === 'candidate' ? !isTrue.candidate : false,
            talentdropRec: item === 'talentdropRec' ? !isTrue.talentdropRec : false,
            status: item === 'status' ? !isTrue.status : false,
            role: item === 'role' ? !isTrue.role : false,
            submited: item === 'submited' ? !isTrue.submited : false,
        })
        setIstrueSecond({
            candidate: item === 'candidate' && isTrue.candidate ? !isTrueSecond.candidate : false,
            talentdropRec: item === 'talentdropRec' && isTrue.talentdropRec ? !isTrueSecond.talentdropRec : false,
            status: item === 'status' && isTrue.status ? !isTrueSecond.status : false,
            role: item === 'role' && isTrue.role ? !isTrueSecond.role : false,
            submited: item === 'submited' && isTrue.submited ? !isTrueSecond.submited : false,
        })


    }
    return (
        <>
            <Layout>
                <div className='container-md pt-5'>
                    <div className='mt-5'>
                        <h1 className='text-center display-5'>Referrer: Dashboard</h1>
                        <div className={Styles.dashboard__nav}>
                            <ul className='list-unstyled d-flex justify-content-between'>
                                <li
                                    onClick={() => {
                                        selectedItem("candidate")
                                    }}


                                    className="d-flex gap-5 align-items-center">
                                    Candidate
                                    <span className={isTrue.candidate ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                                        </svg>
                                    </span>
                                    <span className={isTrueSecond.candidate ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                    </span>
                                </li>
                                <li
                                    onClick={() => selectedItem("talentdropRec")}
                                    className="d-flex gap-5 align-items-center">
                                    Talentdrop Rec
                                    <span className={isTrue.talentdropRec ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                    <span className={isTrueSecond.talentdropRec ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                    </span>
                                </li>
                                <li
                                    onClick={() => selectedItem("status")}
                                    className="d-flex gap-5 align-items-center">
                                    Candidate Status
                                    <span className={isTrue.status ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                    <span className={isTrueSecond.status ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                    </span>
                                </li>
                                <li
                                    onClick={() => selectedItem("role")}
                                    className="d-flex gap-5 align-items-center">
                                    Role
                                    <span className={isTrue.role ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                    <span className={isTrueSecond.role ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                    </span>
                                </li>
                                <li
                                    onClick={() => selectedItem("submited")}
                                    className="d-flex gap-5 align-items-center">
                                    Submited
                                    <span className={isTrue.submited ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted ascending"><path fill="currentColor" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>
                                    </span>
                                    <span className={isTrueSecond.submited ? 'd-block' : 'd-none'}>
                                        <svg style={{ width: '30px' }} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-1wsjt4h" aria-label="sorted descending"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard;