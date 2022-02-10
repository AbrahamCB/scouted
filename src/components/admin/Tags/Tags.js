import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalToggle } from '../../../../store/settings/actions';
import { setTags } from '../../../../store/tags/actions';
import Layout from '../Layout/Layout';
import AddTag from './AddTag/AddTag';
import UpdateTag from './UpdateTag/UpdateTag';

const Tags = () => {
    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const { tags, settings } = useSelector(state => state)
    const [currentData, setCurrentData] = useState({ isUpdate: false })

    useEffect(() => {
        dispatch(setTags())
    }, [])

    const { tagList } = tags;


    const currentUpdate = (data) => {
        setTrigger(false)
        dispatch(modalToggle(settings.modal))
        const updateData = { ...currentData }
        updateData.isUpdate = true;
        updateData.tag_name = data.tag_name
        updateData.id = data.id
        setCurrentData(updateData)
    }

    return (
        <Layout>
            {trigger && <AddTag></AddTag>}
            {currentData.isUpdate && <UpdateTag setCurrentData={setCurrentData} currentData={currentData} />}
            <div className="bg-white container p-5">
                <div className="d-flex justify-content-between py-5 ">
                    <h1 className="mt-3">All Tags</h1>
                    <button onClick={() => {
                        dispatch(modalToggle(settings.modal))
                        setTrigger(true)
                    }}
                        className="btn btn-primary">
                        Add tag
                    </button>
                </div>
                <div className="t_table_content-wrapper">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead bg-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tag Name</th>
                                    <th className="text-center">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tagList?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row" className="row-scope-line">{item.id}</th>
                                                <td>{item.tag_name}</td>
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

export default Tags;

