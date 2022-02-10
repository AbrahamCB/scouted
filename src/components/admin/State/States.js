import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountries } from '../../../../store/countries/actions';
import { modalToggle } from '../../../../store/settings/actions';
import { setStates } from '../../../../store/States/actions';
import Layout from '../Layout/Layout';
import AddState from './AddState/AddState';
import UpdateState from './UpdateState/UpdateState';

const States = () => {
    const dispatch = useDispatch()
    const [trigger, setTrigger] = useState(false)
    const { states, countries, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })
    const [selectCountry, setSelectCountry] = useState(null)

    useEffect(() => {
        dispatch(setStates(selectCountry))
        dispatch(setCountries())
    }, [selectCountry])

    const { statesList } = states
    const { countryList } = countries
    const handleOnChange = (e) => {
        console.log(e.target.value)
        setSelectCountry(e.target.value)
    }

    console.log(states)

    const courrentUpdate = (data) => {
        setTrigger(false)
        dispatch(modalToggle(settings.modal))
        const updateData = { ...currentData }
        updateData.isUpdate = true;
        updateData.state_name = data.state_name
        updateData.country_id = selectCountry
        updateData.id = data.id
        setCurrentData(updateData)
    }

    return (
        <Layout>

            {trigger && <AddState />}

            {currentData.isUpdate && <UpdateState setCurrentData={setCurrentData} currentData={currentData} />}

            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between align-items-center py-5 ">
                    <h1 className="mt-3">All States</h1>
                    <div>
                        <select onChange={handleOnChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option defaultValue >Select country</option>
                            {countryList?.map((item, i) => <option key={i} value={item.id}>{item.country_name}</option>)}
                        </select>
                    </div>
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
                                    <th scope="col">State Name</th>

                                    <th className="text-center">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    statesList?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row" className="row-scope-line">{item.id}</th>
                                                <td>{item.state_name}</td>

                                                <td className="text-center">
                                                    <i onClick={() => {
                                                        courrentUpdate(item)

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

export default States;