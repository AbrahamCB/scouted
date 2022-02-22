
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { BeatLoader } from 'react-spinners';
import 'suneditor/dist/css/suneditor.min.css';
import { setCountries } from '../../../../../../store/countries/actions';
import { setTags } from '../../../../../../store/tags/actions';
import { authPost, getData } from './../../../../../../__lib__/helpers/HttpService';
import stylesClass from './JobForm.module.css';


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
})

const JobForm = () => {
    const [details, setDetails] = useState()
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const { admins, countries, tags } = useSelector(state => state)
    const [companies, setCompanies] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState({})
    const [trigger, setTrigger] = useState(false)
    const [handleFormData, setHandleFormData] = useState({})
    const [selectTags, setSelectTags] = useState([])
    const dispatch = useDispatch()
    const [states, setStates] = useState([])
    const { countryList, isLoading } = countries;
    const [timezones, setTimezones] = useState([])
    const [hourly, setHourly] = useState(false)

    useEffect(() => {
        if (countryList?.length > 0) {
            const zones = countryList.find((country, i) => country.id == handleFormData.country_id && country)
            if (zones) {
                setTimezones(JSON.parse(zones?.timezones))
            }
        }
        dispatch(setTags())
        dispatch(setCountries())
        getData('/companies')
            .then(res => {
                if (res) {
                    setCompanies(res)
                }
            })

        getData(`/states/${handleFormData.country_id}`)
            .then(res => {
                if (res) {
                    setStates(res)
                }
            })
    }, [handleFormData.country_id])
    const handleForm = (e) => {
        const name = e.target.name
        const value = e.target.value
        setHandleFormData(values => ({ ...values, [name]: value }))

    }
    const searchCompanies = (e) => {
        const searchWord = e.target.value
        if (searchWord) {

            setTrigger(true)
        } else {
            setTrigger(false)
        }
        const matched = companies?.filter((value) => {
            return value.company_name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilterData(matched)
    }

    const addSearch = (data) => {
        setSearch(data)
        setTrigger(false)
    }
    const handleSelectTags = (e) => {
        setSelectTags(e)
        console.log(e)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setDisable(true)
        const formData = new FormData()
        formData.append('company_id', search.id)
        formData.append('job_title', handleFormData.job_title)
        formData.append('job_salary', handleFormData.job_salary)
        formData.append('job_description', details)
        formData.append('job_vacancy', handleFormData.job_vacancy)
        formData.append('job_bounty', handleFormData.job_bounty)
        formData.append('country_id', handleFormData.country_id)
        formData.append('state_id', handleFormData.state_id)
        formData.append('_timezone', handleFormData.timezone_name || '')
        formData.append('joining_date', handleFormData.joining_date)
        formData.append('job_type', handleFormData.job_type)
        formData.append('expiry_date', handleFormData.expiry_date)
        formData.append('working_hours', handleFormData.working_hours)
        formData.append('min_salary', handleFormData.max_salary)
        formData.append('max_salary', handleFormData.min_salary)
        formData.append('salary_currency', handleFormData.salary_currency)
        formData.append('hourly_rate', handleFormData.hourly_rate)
        formData.append('_hourly', hourly ? 1 : 0)
        for (let i = 0; i < selectTags?.length; i++) {
            formData.append('tags[]', selectTags[i].value)
        }
        if (details.length <= 10000) {
            authPost('/job', formData, admins.token)
                .then(res => {
                    if (res.success) {
                        toast.success(res.message)
                        setDisable(false)
                    } else {
                        setDisable(false)
                    }
                })
        } else {
            toast.error("Job description maximum chart 10000")
        }
    }

    const { tagList } = tags
    const tagOption = tagList?.map(tag => ({
        label: tag.tag_name,
        value: tag.id
    }));

    const styles = {
        position: 'absolute',
        marginTop: '12px',
        marginLeft: '12px',
    }

    return (
        <>

            <form onSubmit={e => handleSubmit(e)}>

                <div className='row'>
                    <div className="col-12 col-sm-6 col-md-6 position-relative">
                        <div className="row mb-3">
                            <div className='col-6'>
                                <label>Company Name <span className='text-danger'>*</span></label>

                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
                                        required
                                        onChange={searchCompanies}
                                        className="form-control"
                                        placeholder="Search here"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>

                                {trigger &&
                                    <div className={`border rounded px-3 pt-3  position-absolute bg-white col-11 
                                search-list-area ${stylesClass.search__list__area}`}>

                                        <ul className="list-unstyled">
                                            {filterData.map((item, i) => <li key={i} onClick={() => addSearch(item)} className='p-2 bg-secondary m-2 rounded-1'>{item.company_name}</li>)}
                                            {filterData.length === 0 && <li>Company not found</li>}
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className="col-6">
                                <label></label>

                                <div>
                                    <span style={styles}>

                                    </span>
                                    <input
                                        required
                                        disabled
                                        className="form-control"
                                        placeholder="Name here"
                                        defaultValue={search.company_name}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="mb-3 col-12">
                            <label>Job Vacancy <span className='text-danger'>*</span></label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    required
                                    name="job_vacancy"
                                    onChange={handleForm}
                                    type="number"
                                    className="form-control"
                                    placeholder="Job vacancy"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12">
                            <label>Job Bounty <span className='text-danger'>*</span></label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-hand-holding-usd"></i>
                                </span>
                                <input
                                    required
                                    onChange={handleForm}
                                    name="job_bounty"
                                    className="form-control"
                                    placeholder="Job bounty"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className='col-6 mb-3'>
                                <label>Maximum Salary<span className='text-danger'>*</span></label>

                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-money-check"></i>
                                    </span>
                                    <input
                                        required
                                        name="max_salary"
                                        onChange={handleForm}
                                        className="form-control"
                                        placeholder="Job title here"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <label>Minimum Salary</label>
                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-money-check"></i>
                                    </span>
                                    <input
                                        required
                                        name="min_salary"
                                        onChange={handleForm}
                                        className="form-control"
                                        placeholder="Job title here"
                                        style={{ paddingLeft: '30px' }}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="mb-3 col-12">
                            <label>Join Date <span className='text-danger'>*</span></label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    required
                                    name="joining_date"
                                    onChange={handleForm}
                                    type="date"
                                    className="form-control"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12">
                            <label>Expired Date <span className='text-danger'>*</span></label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    required
                                    name="expiry_date"
                                    onChange={handleForm}
                                    type="date"
                                    className="form-control"
                                    placeholder=""
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3  col-12">
                            <label>Select Tags <span className='text-danger'>*</span></label>
                            <div>

                                <Select
                                    onChange={handleSelectTags}

                                    isMulti
                                    name="colors"
                                    options={tagOption}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                            {/* {errors.job_vacancy && <span className="text-danger">Job vacancy required</span>} */}
                        </div>
                        <div className='mb-3 col-12'>

                            <label>Time Zone (optional)<span className='text-danger'></span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <select
                                    disabled={timezones.length > 0 ? false : true}
                                    name='timezone_name'
                                    type='select'
                                    className="form-control"
                                    onChange={handleForm}
                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue >Select time zone</option>
                                    {
                                        timezones?.map((item, index) => <option key={index} value={item.zoneName}>{item.zoneName}</option>)
                                    }

                                </select>
                            </div>

                        </div>
                    </div>
                    <div className='mb-3 col-12 col-sm-6 col-md-6 position-relative'>
                        <div className="mb-3 col-12">
                            <label>Job Title <span className='text-danger'>*</span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-pen"></i>
                                </span>
                                <input
                                    required
                                    name="job_title"
                                    onChange={handleForm}
                                    className="form-control"
                                    placeholder="Job title here"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12">

                            <br />
                            <span className="d-flex gap-2 align-items-center">
                                <input onClick={(e) => setHourly(e.target.checked)} type="checkbox" name="" id="" />
                                <span className='pt-1'>Hourly Rate? </span>
                            </span>
                            <br />
                            <div className="mb-3 col-12 col-sm-12">

                                {hourly && <>
                                    <label>Hourly Rate <span className='text-danger'>*</span></label>
                                    <div>
                                        <span style={styles}>
                                            <i className="fas fa-money-check"></i>
                                        </span>
                                        <input
                                            required
                                            name="hourly_rate"
                                            onChange={handleForm}
                                            type="number"
                                            className="form-control"
                                            placeholder="Hourly Rate"
                                            style={{ paddingLeft: '30px' }}
                                        />
                                    </div>
                                </>}

                            </div>
                        </div>
                        <div className="mb-3 col-12">
                            <label>Salary Currency <span className='text-danger'>*</span></label>
                            <div>
                                <select onChange={handleForm} className="form-control" name="salary_currency" id="">
                                    <option defaultValue>Select currency</option>
                                    <option value="USD">USD</option>
                                    <option value="BDT">BDT</option>
                                    <option value="INR">INR</option>
                                    <option value="NAIRA">NAIRA</option>
                                </select>
                            </div>

                        </div>
                        <div className="mb-3 col-12">
                            <label>Working Hours Weekly <span className='text-danger'>*</span></label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    required
                                    name="working_hours"
                                    onChange={handleForm}
                                    type="number"
                                    className="form-control"
                                    placeholder="Working Hours Weekly"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className='mb-3  col-12'>
                            <label>Job type <span className='text-danger'>*</span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-flag"></i>
                                </span>
                                <select

                                    onChange={handleForm}
                                    name='job_type'
                                    type='select'
                                    className="form-control"

                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue >Select </option>
                                    <option value="full" >Full time </option>
                                    <option value="part" >Part time </option>
                                    <option value="any">Other</option>
                                </select>

                            </div>
                        </div>
                        <div className='mb-3  col-12'>
                            <label>Country <span className='text-danger'>*</span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-flag"></i>
                                </span>
                                <select

                                    onChange={handleForm}
                                    name='country_id'
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
                        </div>
                        <div className='mb-3 col-12'>
                            <label>State <span className='text-danger'>*</span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-map-marker"></i>
                                </span>
                                <select
                                    disabled={states.length > 0 ? false : true}
                                    required
                                    name='state_id'
                                    type='select'
                                    className="form-control"
                                    onChange={handleForm}
                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue>Select State</option>
                                    {
                                        states?.map((item, index) => <option key={index} value={item.id}>{item.state_name}</option>)
                                    }

                                </select>
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <h3 className="my-5">Job Description</h3>
                    <SunEditor

                        maxCharCount="100"
                        charCounter={true}
                        height='300px'
                        onChange={
                            e => setDetails(e)
                        }
                    />
                    <div className='text-end'>
                        <span className={`${details?.length >= 10000 && 'text-danger'}`}>{details?.length || 0}/10000</span>
                        {/* <span >{details.length}/10000</span> */}
                    </div>
                </div>
                <div className="mt-3 text-center">
                    <button
                        disabled={disable}
                        type="submit"
                        className="btn btn-primary">

                        {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Add Job'}
                    </button>
                </div>

            </form>
        </>
    );
};

export default JobForm;
