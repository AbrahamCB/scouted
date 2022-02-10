import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { setCountries } from '../../../../../store/countries/actions';
import { modalToggle } from '../../../../../store/settings/actions';
import { authPost } from '../../../../../__lib__/helpers/HttpService';
import Modals from '../../Modal/Modals';



const AddState = () => {
    const dispatch = useDispatch()
    const { admins, settings, countries } = useSelector(state => state)
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        dispatch(setCountries())
    }, [])

    const onSubmit = async data => {
        setDisable(true)
        if (data) {
            authPost('/state', data, admins.token)
                .then(res => {
                    if (res.success) {
                        toast.success(res.message)
                        dispatch(setCountries())
                        setDisable(false)
                        reset()
                    } else {
                        setDisable(false)
                        toast.error('The state name has already been taken')
                    }
                })

        }
    }
    const { countryList } = countries
    return (

        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Modals>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-md-11">
                            <h5 className="text-center">Add State</h5>
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
                                <select
                                    {...register("country_id",
                                        {
                                            required: true,
                                        }
                                    )}
                                    className="form-control"

                                >
                                    <option defaultValue >Select Country</option>
                                    {countryList.map((item, i) => <option key={i} value={item.id}>{item.country_name}</option>)}
                                </select>
                            </div>
                            {errors.country_name && <span className="text-danger">Country name required</span>}
                            <div className="mb-3">
                                <input
                                    {...register("state_name",
                                        {
                                            required: true,
                                        }
                                    )}
                                    className="form-control"
                                    placeholder="State name"
                                />
                            </div>
                            {errors.state_name && <span className="text-danger"> State name required</span>}
                            <div className="mt-3">
                                <button
                                    disabled={disable}
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Add'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </Modals>

        </>
    );
};

export default AddState;