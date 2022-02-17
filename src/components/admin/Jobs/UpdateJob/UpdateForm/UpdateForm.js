
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { BeatLoader } from 'react-spinners';
import 'suneditor/dist/css/suneditor.min.css';
import { setCountries } from '../../../../../../store/countries/actions';
import { setTags } from '../../../../../../store/tags/actions';
import { authPost, getData } from './../../../../../../__lib__/helpers/HttpService';
import stylesClass from './UpdateForm.module.css';

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,

})


const jobType = [{ id: 1, value: 'full', label: 'Full time' }, { id: 2, value: 'part', label: 'Part time' }, { id: 3, value: 'any', label: 'Others' }]

const UpdateForm = () => {
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
    const router = useRouter()
    const { job, referars, country, company, state, previousTags } = JSON.parse(router.query.nested);
    // console.log(country)

    const tagDefault = previousTags?.map(tag => ({
        label: tag.tag_name,
        value: tag.id
    }));
    useEffect(() => {


        dispatch(setTags())
        dispatch(setCountries())
        getData('/companies')
            .then(res => {
                if (res) {
                    setCompanies(res)
                }
            })

        getData(`/states/${handleFormData.country_id || country.id}`)
            .then(res => {
                if (res) {
                    setStates(res)
                }
            })
        if (countryList?.length > 0) {
            const zones = countryList.find((item, i) => item.id == handleFormData.country_id && item)
            if (zones) {
                console.log(zones)
                setTimezones(JSON.parse(zones?.timezones))
            }
        }
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
    }

    console.log(search.company_name)
    const handleSubmit = (e) => {

        e.preventDefault()
        setDisable(true)
        const formData = new FormData()
        formData.append('company_id', search.id || company.id)
        formData.append('job_title', handleFormData.job_title || job.job_title)
        formData.append('job_description', details || job.job_description)
        formData.append('job_vacancy', handleFormData.job_vacancy || job.job_vacancy)
        formData.append('job_bounty', handleFormData.job_bounty || job.job_bounty)
        formData.append('country_id', handleFormData.country_id || country.id)
        formData.append('state_id', handleFormData.state_id || state.id)
        formData.append('_timezone', handleFormData.timezone_name || job._timezone)
        formData.append('joining_date', handleFormData.joining_date || job.joining_date)
        formData.append('job_type', handleFormData.job_type || job.job_type)
        formData.append('expiry_date', handleFormData.expiry_date || job.expiry_date)
        formData.append('working_hours', handleFormData.working_hours || job.working_hours)
        formData.append('min_salary', handleFormData.max_salary || job.min_salary)
        formData.append('max_salary', handleFormData.min_salary || job.max_salary)
        formData.append('salary_currency', handleFormData.salary_currency || job.salary_currency)
        formData.append('hourly_rate', handleFormData.hourly_rate || job.hourly_rate)
        formData.append('_hourly', hourly ? 1 : 0)
        for (let i = 0; i < selectTags?.length; i++) {
            formData.append('tags[]', selectTags[i].value || tags)
        }
        authPost(`/job/u/${job.id}`, formData, admins.token)
            .then(res => {
                if (res.success) {
                    console.log(res)
                    toast.success(res.message)
                    setDisable(false)
                } else {
                    setDisable(false)
                }
            })
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
                                <label>Company Name</label>

                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
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
                                        disabled
                                        // readOnly
                                        className="form-control"
                                        placeholder="Name here"
                                        value={search.company_name !== undefined ? search.company_name : company.company_name}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="mb-3 col-12">
                            <label>Job Vacancy</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    name="job_vacancy"
                                    onChange={handleForm}
                                    defaultValue={job.job_vacancy}
                                    type="number"
                                    className="form-control"
                                    placeholder="Job vacancy"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12">
                            <label>Job Bounty</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-hand-holding-usd"></i>
                                </span>
                                <input
                                    onChange={handleForm}
                                    defaultValue={job.job_bounty}
                                    name="job_bounty"
                                    className="form-control"
                                    placeholder="Job bounty"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className='col-6 mb-3'>
                                <label>Maximum Salary</label>

                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-money-check"></i>
                                    </span>
                                    <input
                                        defaultValue={job.max_salary}
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
                                        defaultValue={job.min_salary}
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
                            <label>Join Date</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    defaultValue={job.joining_date}
                                    name="joining_date"
                                    onChange={handleForm}
                                    type="date"
                                    className="form-control"
                                    style={{ paddingLeft: '30px' }}
                                />
                            </div>

                        </div>
                        <div className="mb-3 col-12">
                            <label>Expired Date</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    defaultValue={job.expiry_date}
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

                            <label>Select Tags</label>

                            {/* <span>Previous: {previousTags?.map((tag, i) => (

                                    <span key={i} className={styles.banner_tag_names}>{tag.tag_name}{previousTags.length - 1 === i ? '' : ','}</span>

                                ))}</span> */}

                            <div>

                                <Select
                                    defaultValue={tagDefault}
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

                            <div className='d-flex gap-5'>
                                <label>Time Zone</label>
                                <br />
                                <span>{job._timezone}</span>
                            </div>
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
                                    {
                                        timezones?.map((item, index) => <option key={index} selected={item.zoneName == job._timezone} value={item.zoneName}>{item.zoneName}</option>)
                                    }

                                </select>
                            </div>

                        </div>

                    </div>
                    <div className='mb-3 col-12 col-sm-6 col-md-6 position-relative'>
                        <div className="mb-3 col-12">
                            <label>Job Title</label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-pen"></i>
                                </span>
                                <input
                                    defaultValue={job.job_title}
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
                                    <label>Hourly Rate</label>
                                    <div>
                                        <span style={styles}>
                                            <i className="fas fa-money-check"></i>
                                        </span>
                                        <input
                                            defaultValue={job.hourly_rate}
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
                            <label>Salary Currency</label>
                            <input
                                defaultValue={job.salary_currency}
                                onChange={handleForm}
                                className="form-control text-uppercase"
                                name="salary_currency"
                                placeholder="currency"

                            />
                        </div>
                        <div className="mb-3 col-12">
                            <label>Working Hours Weekly</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-users"></i>
                                </span>
                                <input
                                    defaultValue={job.working_hours}
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
                            <label>Job type</label>
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
                                    {jobType.map((item, i) => <option key={i} selected={item.value == job.job_type} value={item.value} >{item.label}</option>)}

                                </select>

                            </div>
                        </div>
                        <div className='mb-3  col-12'>
                            <label>Country</label>
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
                                    {
                                        countryList?.map((item, index) => <option key={index} selected={item.id == country.id} value={item.id}>{item.country_name}</option>)
                                    }
                                </select>

                            </div>
                        </div>
                        <div className='mb-3 col-12'>
                            <label>State</label>
                            <div>
                                <span style={styles}>
                                    <i className="fas fa-map-marker"></i>
                                </span>
                                <select
                                    disabled={states.length > 0 ? false : true}
                                    name='state_id'
                                    type='select'
                                    className="form-control"
                                    onChange={handleForm}
                                    style={{ paddingLeft: '30px' }}
                                >
                                    {
                                        states?.map((item, index) => <option key={index} selected={item.id == state.id} value={item.id}>{item.state_name}</option>)
                                    }

                                </select>
                            </div>

                        </div>

                    </div>


                </div>
                <div>
                    <h3 className="my-5">Job Description</h3>
                    <SunEditor
                        value={job.job_description}
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

                        {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Update Job'}
                    </button>
                </div>

            </form>
        </>
    );
};

export default UpdateForm;