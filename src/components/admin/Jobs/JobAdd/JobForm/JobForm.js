
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { BeatLoader } from 'react-spinners';
import { setTags } from '../../../../../../store/tags/actions';
import { getData, postData } from './../../../../../../__lib__/helpers/HttpService';
import stylesClass from './JobForm.module.css';




const JobForm = () => {
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const { admins, tags } = useSelector(state => state)
    const [companies, setCompanies] = useState([])
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState({})
    const [trigger, setTrigger] = useState(false)
    const [handleFormData, setHandleFormData] = useState({})
    const [selectTags, setSelectTags] = useState([])
    const dispatch = useDispatch()
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [timezones, setTimezones] = useState([])



    useEffect(() => {
        dispatch(setTags())
        getData('/companies')
            .then(res => {
                if (res) {
                    setCompanies(res)
                }
            })
        allCountry();
        allState();
        allTimezone()
    }, [handleFormData.country_id])

    const handleForm = (e) => {

        const name = e.target.name
        const value = e.target.value
        setHandleFormData(values => ({ ...values, [name]: value }))

    }




    const allCountry = () => {
        getData('/countries')
            .then(res => {
                if (res) {
                    setCountries(res)
                }

            })
    }
    const allState = () => {
        getData(`/states/${handleFormData.country_id}`)
            .then(res => {
                if (res) {
                    setStates(res)
                }
            })
    }
    const allTimezone = () => {
        getData(`/timezones/${handleFormData.country_id}`)
            .then(res => {
                if (res) {
                    setTimezones(res)
                }
            })
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


    const handleSubmit = (e) => {
        e.preventDefault()
        setDisable(true)
        const formData = new FormData()
        formData.append('company_id', search.id)
        formData.append('job_title', handleFormData.job_title)
        formData.append('job_salary', handleFormData.job_salary)
        formData.append('job_description', handleFormData.job_description)
        formData.append('job_vacancy', handleFormData.job_vacancy)
        formData.append('job_bounty', handleFormData.job_bounty)
        formData.append('country_id', handleFormData.country_id)
        formData.append('state_id', handleFormData.state_id)
        formData.append('timezone_id', handleFormData.timezone_id)


        for (let i = 0; i < selectTags?.length; i++) {
            formData.append('tags[]', selectTags[i].value)
        }

        postData('/job', formData, setDisable)
            .then(res => {
                if (res.success) {
                    toast.success(res.message)
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
                <div className="row">
                    <div className='row'>
                        <div className="mb-3 col-12 col-sm-6 col-md-6 position-relative">
                            <div className="row">
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

                        </div>
                        <div className="mb-3 col-12 col-sm-6 col-md-6">
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
                        <div className="col-12 col-sm-6">
                            <div className="mb-3 col-12 col-sm-12">
                                <label>Job Salary <span className='text-danger'>*</span></label>
                                <div>
                                    <span style={styles}>
                                        <i className="fas fa-money-check"></i>
                                    </span>
                                    <input
                                        required
                                        name="job_salary"
                                        onChange={handleForm}
                                        type="number"
                                        className="form-control"
                                        placeholder="Job salary"
                                        style={{ paddingLeft: '30px' }}
                                    />
                                </div>

                            </div>
                            <div className="mb-3 col-12 col-sm-12">
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
                            <div className="mb-3 col-12 col-sm-12">
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
                        </div>
                        <div className="mb-3 col-12 col-sm-6 position-relative" >
                            <label>Job Description <span className='text-danger'>*</span></label>
                            <textarea
                                // minLength='100'
                                onChange={handleForm}
                                name="job_description"
                                maxLength="250"
                                required
                                className="form-control"
                                placeholder="Description"
                                style={{ resize: 'none', height: '187px' }}
                            />
                            <p style={{ position: 'absolute', top: '76%', left: '89.5%' }}>

                                <span className={`${handleFormData.job_description?.length === 250 && 'text-danger'}`}>{handleFormData.job_description?.length || 0}/250</span>
                            </p>

                        </div>
                        <div className="mb-3  col-12 col-sm-6">
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
                        <div className='"mb-3  col-12 col-sm-6'>
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
                                        countries?.map((item, index) => <option key={index} value={item.id}>{item.country_name}</option>)
                                    }
                                </select>

                            </div>
                        </div>

                        <div className='mb-3 col-12 col-sm-6'>
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
                        <div className='mb-3 col-12 col-sm-6'>

                            <label>Time Zone <span className='text-danger'>*</span></label>

                            <div>
                                <span style={styles}>
                                    <i className="fas fa-globe"></i>
                                </span>
                                <select
                                    disabled={timezones.length > 0 ? false : true}
                                    name='timezone_id'
                                    type='select'
                                    className="form-control"
                                    onChange={handleForm}
                                    style={{ paddingLeft: '30px' }}
                                >
                                    <option defaultValue >Select time zone</option>
                                    {
                                        timezones?.map((item, index) => <option key={index} value={item.id}>{item._zone_name_}</option>)
                                    }

                                </select>
                            </div>

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

export default JobForm;