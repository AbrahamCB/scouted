import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';
import { BeatLoader } from "react-spinners";
import { getData } from "../../../../__lib__/helpers/HttpService";
import Layout from "../layout";
import { authPost } from './../../../../__lib__/helpers/HttpService';
import Styles from './Refer.module.css';

const Refer = () => {
    const router = useRouter()
    const { query } = router
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [self, setSelf] = useState(false)
    const [job, setJob] = useState(null)
    const [disable, setDisable] = useState(false)
    // const [terms, setTerms] = useState(false)
    const { users } = useSelector(state => state)

    useEffect(() => {
        getData(`/job/find/${query.company_slug}/${query.job_slug}`)
            .then(res => {
                setJob(res)
            })
    }, [query.company_slug, query.job_slug])




    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setDisable(true)
        if (users.isUser) {
            authPost(`/refer/${job.id}`, data, users.token)
                .then(res => {
                    if (res.success) {
                        toast.success(res.message)
                        setDisable(false)
                        reset()
                    } else {
                        // toast.error(res.message)
                        setDisable(false)
                    }
                })
        } else {
            router.push('/login')
            setDisable(false)
        }
    };

    return (
        <>

            <Layout>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="mt-5">
                    <div className="text-center py-5">
                        <h1 className={Styles.refer_title}>Refer Candidate</h1>
                        {/* <p className={Styles.refer_text}>You can make up to 20 referrals on Scouted.</p> */}
                        <p className={Styles.refer_text}>VIPs have unlimited referrals. <Link href="mailto:abraham@thecareerbuddy.com"><a
                            target="_blank">Talk to us</a></Link> about becoming a VIP bounty hunter!</p>
                    </div>
                    <div className={Styles.refer_area}>

                        <h2 className="text-center">
                            <Link href={`/c/${job?.company?.company_slug}/${job?.job_slug}`}><a >{job?.job_title} </a></Link>
                            <span> for </span>
                            <Link href={`/c/${job?.company?.company_slug}`}><a className="text-black"> {job?.company?.company_name}</a></Link></h2>

                        <form className={Styles.refer_form} onSubmit={handleSubmit(onSubmit)}>
                            <h3 className={Styles.refer_form_title}>Referrer</h3>
                            <div className="mb-4">
                                <label>Name <span className="text-danger">*</span></label>

                                <input defaultValue={users?.user?.name} className="form-control" {...register("referrer_name", { required: true })} />
                                {errors.referrer_name && <span className="text-danger">Required</span>}

                            </div>

                            <div className="mb-4">
                                <label>Email <span className="text-danger">*</span></label>

                                <input defaultValue={users?.user?.email} className="form-control" {...register("referrer_email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                                {errors.referrer_email?.type === 'required' && <span className="text-danger">Required</span>}
                                {errors.referrer_email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Website or Linkedin <span className="text-danger">*</span></label>

                                <input className="form-control" {...register("_referrerurl", { required: true })} />
                                {errors._referrerurl && <span className="text-danger">Required</span>}


                            </div>
                            {/* <div className="d-flex gap-2 align-items-center">
                                <input onChange={(e) => setSelf(e.target.checked)} className="" type="checkbox" name="" id="" />
                                <p>You&apos;re referring yourself as the candidate.</p>
                            </div> */}
                            {/* <div className={`${recommender ? 'b-block' : 'd-none'}`}>
                                <div className="mt-5">
                                    <h3 className={Styles.refer_form_title}>Recommender</h3>

                                </div>
                                <div className="mb-4">
                                    <label>Recommender Name </label>

                                    <input className="form-control" {...register("recommender_name", { required: false })} />
                                    {errors.recommender_name && <span className="text-danger">Required</span>}

                                </div>
                                <div className="mb-4">
                                    <label>Recommender Email</label>

                                    <input className="form-control" {...register("recommender_email", { required: false, pattern: /\S+@\S+\.\S+/ })} />
                                    {errors.recommender_email?.type === 'required' && <span className="text-danger">Required</span>}
                                    {errors.recommender_email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                                </div>
                            </div> */}

                            <div className={Styles.form_candidate}>
                                <div>
                                    <h3 className={Styles.refer_form_title}>Candidate</h3>

                                </div>
                                <div className="d-flex gap-2 align-items-center py-8">
                                    <input onChange={(e) => setSelf(e.target.checked)} className="" type="checkbox" name="" id="" />
                                    <p>You&apos;re referring yourself as the candidate.</p>
                                </div>

                                <div className="mb-4">
                                    <label>Candidate Name <span className="text-danger">*</span></label>

                                    <input defaultValue={self ? users.user?.name : ''} className="form-control" {...register("candidate_name", { required: true })} />
                                    {errors.candidate_name && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-4">
                                    <label>Candidate Email <span className="text-danger">*</span></label>


                                    <input defaultValue={self ? users.user?.email : ''} className="form-control" {...register("candidate_email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                                    {errors.candidate_email?.type === 'required' && <span className="text-danger">Required</span>}
                                    {errors.candidate_email?.type === "pattern" && <span className="text-danger">Valid email required</span>}
                                </div>
                                <div className="mb-4">
                                    <label>Candidate&apos;s website or LinkedIn <span className="text-danger">*</span></label>

                                    <input className="form-control" {...register("_candidateurl", { required: true })} />
                                    {errors._candidateurl && <span className="text-danger">Required</span>}
                                </div>
                            </div>
                            <div className={Styles.form_tell}>
                                <div>
                                    <h3 className={Styles.refer_form_title}>Tell us more!</h3>
                                </div>
                                <div className="mb-5">
                                    <label>Why are you referring this person? What makes this person stand out? <span className="text-danger">*</span></label>

                                    <textarea rows={4} className="form-control" {...register("referring_description", { required: true })} />
                                    {errors.referring_description && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How familiar are you with this person&apos;s work?  <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("person_work", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="Very - fast hand knowledge">Very - fast hand knowledge</option>
                                        <option value="Somewhat">Somewhat</option>
                                        <option value="Just by reputaion">Just by reputaion</option>
                                        <option value="Not familiar">Not familiar</option>

                                    </select>
                                    {errors.person_work && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How would you describe them?  <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("describe_them", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="Superstar. One of the best people I know.">Superstar. One of the best people I know.</option>
                                        <option value="Great. Great person to have on any team.">Great. Great person to have on any team.</option>
                                        <option value="Not sure. Need expert to evaluate skill and lavel.">Not sure. Need expert to evaluate skill and lavel.</option>
                                    </select>
                                    {errors.describe_them && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How open to new opportunities are they?    <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("opportunities", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="Not sure">Not sure</option>
                                        <option value="Somewhat">Somewhat</option>
                                        <option value="Very">Very</option>

                                    </select>
                                    {errors.opportunities && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">You attest to their knowledge of being referred to Scouted, or a Scouted partner company. We&apos;ll be checking in with them!     <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("referring_company", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                    {errors.referring_company && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">Would you split your bounty payment with the candidate? <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("payment_candidate", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="Yes - 50/50">Yes - 50/50</option>
                                        <option value="Yes - some other split">Yes - some other split</option>
                                        <option value="No">No</option>


                                    </select>
                                    {errors.payment_candidate && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How&apos;d you hear about us? <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("about_us", { required: true })} >
                                        <option defaultValue  >Select...</option>
                                        <option value="YC">YC</option>
                                        <option value="Linkedin">Linkedin</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Friend/Colleague">Friend/Colleague</option>
                                        <option value="Online Search">Online Search</option>
                                        <option value="Ads">Ads</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    {errors.about_us && <span className="text-danger">Required</span>}
                                </div>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <input className="" type="checkbox" required name="" id="" />
                                <p>You agree to the <Link href="/"><a>Terms of Use</a></Link> and the <Link href="/"><a>Privacy Policy.</a></Link></p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className={Styles.form_button} disabled={disable} >
                                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Submit'}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Refer;