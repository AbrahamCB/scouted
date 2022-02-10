import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../../../../store/settings/actions";
import Modals from "../../Modal/Modals";
// import { modalToggle } from '../../../../../store/settings/actions';
// import Modals from '../../Modal/Modals';

const UpdateJobs = (props) => {
    // const { tag_name, id } = props.currentData;
    // const { setCurrentData } = props;
    const dispatch = useDispatch()
    const { admins, settings } = useSelector(state => state)
    // const [disable, setDisable] = useState(false)
    // const [loading, setLoading] = useState(true);
    // const [color, setColor] = useState("#ffffff");

    // const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // const onSubmit = async data => {
    //     setDisable(true)
    //     if (data) {
    //         updateData(`tag/${id}}`, data, admins.token)
    //             .then(res => {
    //                 if (res.success) {
    //                     toast.success(res.message)
    //                     dispatch(setTags())
    //                     setDisable(false)
    //                     reset()
    //                 }
    //             })
    //     }
    // }
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
                            {/* <h5 className="text-center">Update Tag</h5> */}
                        </div>
                        <div className="col-md-1">
                            <i onClick={() => {
                                // setCurrentData({ isUpdate: false })
                                dispatch(modalToggle(settings.modal))

                            }} style={{ cursor: 'pointer' }} className="fas fa-times"></i>
                        </div>
                    </div>
                    <div>
                        <h1>Job update comming sooon!!</h1>
                    </div>
                    {/* <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input
                                    defaultValue={tag_name}
                                    {...register("tag_name",
                                        {
                                            required: true,
                                        }
                                    )}
                                    className="form-control"
                                    placeholder="Country name"
                                />
                            </div>
                            {errors.tag_name && <span className="text-danger">Country name required</span>}

                            <div className="mt-3">
                                <button
                                    disabled={disable}
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Update'}
                                </button>
                            </div>

                        </form>
                    </div> */}
                </div>
            </Modals>

        </>
    );
};

export default UpdateJobs;