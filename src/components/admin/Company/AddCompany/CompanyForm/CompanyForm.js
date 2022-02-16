
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import 'suneditor/dist/css/suneditor.min.css';
import { setCountries } from '../../../../../../store/countries/actions';
import { authPost, getData } from './../../../../../../__lib__/helpers/HttpService';

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
})
const CompanyForm = () => {
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [states, setStates] = useState([])
    const [timezones, setTimezones] = useState([])
    const { admins, countries } = useSelector(state => state)
    const dispatch = useDispatch()
    const { register, watch, handleSubmit, formState: { errors }, reset } = useForm()

    const { countryList, isLoading } = countries

    useEffect(() => {
        dispatch(setCountries())
        if (watch('country_id')) {
            const zones = countryList?.find((country, i) => country.id == watch('country_id') && country)
            if (zones) {
                setTimezones(JSON.parse(zones?.timezones))
            }
        }
        getData(`/states/${watch('country_id')}`)

            .then(res => {
                if (res) {
                    setStates(res)
                }
            })
    }, [watch('country_id')])



    const onSubmit = async data => {

        const formData = new FormData()

        formData.append('company_name', data.company_name)
        formData.append('company_description', data.company_description)
        formData.append('website_url', data.website_url)
        formData.append('employee_number', data.employee_number)
        formData.append('_timezone', data.timezone_name)
        formData.append('founded_date', data.founded_date)
        formData.append('country_id', data.country_id)
        formData.append('state_id', data.state_id)
        formData.append('facebook_url', data.facebook_url)
        formData.append('twitter_url', data.twitter_url)
        formData.append('linkedin_url', data.linkedin_url)
        formData.append('instagram_url', data.instagram_url)
        formData.append('image', data.company_logo[0])
        await submitData(formData)
    }


    const submitData = async data => {
        setDisable(true)
        authPost('/company', data, admins.token)
            .then(res => {
                if (res.success) {
                    toast.success(res.message)
                    setDisable(false)
                    reset()
                } else {
                    setDisable(false)
                }
            })

    }
    const styles = {
        position: 'absolute',
        marginTop: '12px',
        marginLeft: '12px',
    }




    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div className="mb-3 col-12">
                                <label>Company Name</label>

                                <div>
                                    <span style={styles}>
                                        <i className="fa fa-building"></i>
                                    </span>
                                    <input
                                        {...register("company_name",
                                            {
                                                required: true
                                            }
                                        )}
                                        className="form-control"
                                        placeholder="Type company name"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>
                                {errors.company_name && <span className="text-danger">Company name required</span>}

                            </div>
                            <div className="mb-3 col-12">
                                <label>Company logo</label>
                                <input
                                    required
                                    accept=".png, .jpg"
                                    {...register("company_logo",
                                        {
                                            required: true
                                        }
                                    )}
                                    type='file'
                                    className="form-control"
                                    placeholder="Type company name"
                                />
                                {errors.category_logo && <span className="text-danger">Company name required</span>}

                            </div>

                        </div>
                        <div className="mb-3 col-12 col-sm-6 position-relative" >
                            <label>Company Description</label>
                            <textarea
                                // minLength='100'
                                maxLength="250"
                                required
                                rows="4"
                                {...register("company_description",
                                    {
                                        required: true,
                                    }
                                )}
                                className="form-control"
                                placeholder="Description"

                            />
                            <p style={{ position: 'absolute', top: '76%', left: '89.5%' }}>

                                <span className={`${watch().company_description?.length === 250 && 'text-danger'}`}>{watch().company_description?.length || 0}/250</span>
                            </p>
                            {errors.company_description && <span className="text-danger">Description is required</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Wesite URL</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <input
                                    {...register("website_url",
                                        {
                                            required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/
                                        }
                                    )}
                                    className="form-control"
                                    placeholder="https://www.website.com"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.website_url && <span className="text-danger">Website required with https://</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Employee number</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-user"></i>
                                </span>
                                <input
                                    {...register("employee_number",
                                        {
                                            required: true
                                        }
                                    )}
                                    type='number'
                                    className="form-control"
                                    placeholder="Type Employe number"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.employee_number && <span className="text-danger">Employee number required</span>}

                        </div>

                        <div className="mb-3 col-12 col-sm-6">
                            <label>Founded Date (optional)</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-calendar-alt"></i>
                                </span>
                                <input
                                    {...register("founded_date",
                                        {
                                            required: false
                                        }
                                    )}
                                    type='date'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {/* {errors.founded_date && <span className="text-danger">Founded date required</span>} */}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Country</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-flag"></i>
                                </span>
                                <select


                                    required
                                    {...register("country_id",
                                        {
                                            required: true
                                        }
                                    )}
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue >Select Country</option>
                                    {
                                        countryList?.map((item, index) => <option key={index} value={item.id}>{item.country_name}</option>)
                                    }
                                </select>

                            </div>
                            {errors.country_id && <span className="text-danger">Country is required</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>State</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-map-marker"></i>
                                </span>
                                <select
                                    disabled={states.length > 0 ? false : true}
                                    required
                                    {...register("state_id",
                                        {
                                            required: true
                                        }
                                    )}
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue>Select State</option>
                                    {
                                        states?.map((item, index) => <option key={index} value={item.id}>{item.state_name}</option>)
                                    }

                                </select>
                            </div>
                            {errors.state_id && <span className="text-danger">State required</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Time Zone (optional)</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <select
                                    disabled={timezones.length > 0 ? false : true}
                                    required
                                    {...register("timezone_name",
                                        {
                                            required: false
                                        }
                                    )}
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue >Select time zone</option>

                                    {timezones?.map((item, index) => <option key={index} value={item.zoneName}>{item.zoneName}</option>)}


                                </select>
                            </div>
                            {/* {errors.timezone_id && <span className="text-danger">Time zone required</span>} */}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Facebook</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-facebook-square"></i>
                                </span>
                                <input
                                    {...register("facebook_url",
                                        {
                                            required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/
                                        }
                                    )}

                                    className="form-control"
                                    placeholder="Facebook link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.facebook_url && <span className="text-danger">Facebook required with https://</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Twitter</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-twitter-square"></i>
                                </span>
                                <input
                                    {...register("twitter_url",
                                        {
                                            required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/
                                        }
                                    )}

                                    className="form-control"
                                    placeholder="Twitter link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.twitter_url && <span className="text-danger">Twitter required with https://</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Linkedin</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-linkedin"></i>
                                </span>
                                <input
                                    {...register("linkedin_url",
                                        {
                                            required: true, pattern: /^(ftp|http|https):\/\/[^ "]+$/
                                        }
                                    )}

                                    className="form-control"
                                    placeholder="Linkedin link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.linkedin_url && <span className="text-danger">Linkedin required with https://</span>}

                        </div>
                        <div className="mb-3 col-12 col-sm-6">
                            <label>Instagram (optional)</label>
                            <div>
                                <span style={styles}>
                                    <i className="fab fa-instagram-square"></i>
                                </span>
                                <input
                                    {...register("instagram_url",
                                        {
                                            pattern: /^(ftp|http|https):\/\/[^ "]+$/
                                        }
                                    )}

                                    className="form-control"
                                    placeholder="Instagram link"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>
                            {errors.instagram_url && <span className="text-danger">Instagram required with https://</span>}

                        </div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="mt-3 text-center">
                    <button
                        disabled={disable}
                        type="submit"
                        className="btn btn-primary">

                        {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Add Company'}
                    </button>
                </div>

            </form>
        </>
    );
};

export default CompanyForm;