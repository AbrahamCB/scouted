import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanies } from '../../../../../store/companies/actions';
import { modalToggle } from '../../../../../store/settings/actions';
import Layout from '../../Layout/Layout';
import CompanyUpdate from '../UpdateCompany/UpdateCompany';

const Companies = () => {
    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const { companies, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })

    useEffect(() => {
        dispatch(setCompanies())
    }, [])

    const { companyList } = companies;


    const currentUpdate = (data) => {
        setTrigger(true)
        // setTrigger(false)
        dispatch(modalToggle(settings.modal))
        // const updateData = { ...currentData }
        // updateData.isUpdate = true;
        // updateData.tag_name = data.tag_name
        // updateData.id = data.id
        // setCurrentData(updateData)
    }

    return (
        <Layout>
            {/* {trigger && <AddTag></AddTag>} */}
            {trigger && <CompanyUpdate setCurrentData={setCurrentData} currentData={currentData} />}
            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between py-5 ">
                    <h1 className="mt-3">All Companies</h1>
                    <Link href="/admin/add-company">
                        <a>
                            <button onClick={() => {

                            }}
                                className="btn btn-primary">
                                Add Company
                            </button>
                        </a>
                    </Link>
                </div>
                <div className="t_table_content-wrapper">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead bg-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Company Name</th>
                                    <th className="text-center">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    companyList?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row" className="row-scope-line">{item.id}</th>
                                                <td>{item.company_name}</td>
                                                <td className="text-center">
                                                    <i onClick={() => currentUpdate(item)}

                                                        style={{ cursor: 'pointer' }} className="fas fa-edit"></i>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </Layout >
    );
};

export default Companies;

