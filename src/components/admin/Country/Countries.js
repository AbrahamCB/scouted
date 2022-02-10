import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalToggle } from '../../../../store/settings/actions';
import Layout from "../Layout/Layout";
import { setCountries } from './../../../../store/countries/actions';
import AddCountry from './AddCountry/AddCountry';
import UpdateCountry from './UpdateCountry/UpdateCountry';

const Countries = () => {
    const dispatch = useDispatch()
    const [trigger, setTrigger] = useState(false)
    const { countries, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })
    useEffect(() => {
        dispatch(setCountries())
    }, [])

    const { countryList } = countries


    const countryUpdate = (data) => {
        setTrigger(false)
        dispatch(modalToggle(settings.modal))
        const updateData = { ...currentData }
        updateData.isUpdate = true;
        updateData.country_name = data.country_name
        updateData.country_code = data.country_code
        updateData.id = data.id
        setCurrentData(updateData)
    }

    return (
        <Layout>

            {trigger && <AddCountry />}

            {currentData.isUpdate && <UpdateCountry setCurrentData={setCurrentData} currentData={currentData} />}

            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between py-5 ">
                    <h1 className="mt-3">All Countries</h1>
                    <button onClick={() => {
                        dispatch(modalToggle(settings.modal))
                        setTrigger(true)
                    }}
                        className="btn btn-primary">
                        Add
                    </button>
                </div>
                <div className="t_table_content-wrapper">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead bg-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Counry Name</th>
                                    <th scope="col">Country Code</th>
                                    <th className="text-center">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    countryList?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row" className="row-scope-line">{item.id}</th>
                                                <td>{item.country_name}</td>
                                                <td>{item.country_code}</td>
                                                <td className="text-center">
                                                    <i onClick={() => {
                                                        countryUpdate(item)

                                                    }}
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

export default Countries;