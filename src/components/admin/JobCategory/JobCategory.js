import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { modalToggle } from "../../../../store/settings/actions";
import Layout from "../Layout/Layout";
import Modals from '../Modal/Modals';

const JobCategory = () => {
    const dispatch = useDispatch()
    const { settings } = useSelector(state => state)
    const [trigger, setTrigger] = useState()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async data => {
        console.log(data);

    }
    return (
        <Layout>
            <Button onClick={() => {
                dispatch(modalToggle(settings.modal))
                setTrigger(true)
            }}>Click Me </Button>
            {trigger &&
                <Modals>
                    <div className="container">
                        <div className="row my-3">
                            <div className="col-md-11">
                                <h5 className="text-center">Edit category</h5>
                            </div>
                            <div className="col-md-1">
                                <i onClick={() => {
                                    dispatch(modalToggle(settings.modal))

                                }} style={{ cursor: 'pointer' }} className="fas fa-times"></i>
                            </div>
                        </div>
                        <div className="row">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">


                                    <input
                                        {...register("category_name",
                                            {
                                                required: 'Category name required.',
                                            }
                                        )}
                                        type="text"
                                        className="form-control"
                                        placeholder="Category name"


                                    />


                                </div>
                                <div className="mb-3">
                                    <input
                                        {...register("category_icon",
                                            {
                                                required: 'Category icon required.',
                                            }
                                        )}
                                        type="text"
                                        className="form-control"
                                        placeholder='Category Icon'

                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </Modals>
            }
        </Layout>
    );
};

export default JobCategory;