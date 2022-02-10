import Link from "next/link";
import { useForm } from "react-hook-form";
import Layout from "../layout";
import Styles from './Refer.module.css';
const Refer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Layout>
                <div className="mt-5">
                    <div className="text-center py-5">
                        <h1 className={Styles.refer_title}>Refer Candidate</h1>
                        <p className={Styles.refer_text}>You can make up to 20 referrals on Talentdrop.</p>
                        <p className={Styles.refer_text}>VIPs have unlimited referrals. <Link href="/"><a>Talk to us</a></Link> about becoming a VIP bounty hunter!</p>
                    </div>
                    <div className={Styles.refer_area}>

                        <h2 className="text-center"> <Link href="/"><a >General Referral</a></Link> forTalentdrop</h2>

                        <form className={Styles.refer_form} onSubmit={handleSubmit(onSubmit)}>
                            <h3 className={Styles.refer_form_title}>Referrer</h3>
                            <div className="mb-4">
                                <label>Name <span className="text-danger">*</span></label>

                                <input className="form-control" {...register("name", { required: true })} />
                                {errors.name && <span className="text-danger">Required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Email <span className="text-danger">*</span></label>

                                <input className="form-control" {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">Required</span>}
                            </div>

                            <div className="mb-4">
                                <label>Website or LinkedIn <span className="text-danger">*</span></label>

                                <input className="form-control" {...register("website", { required: true })} />
                                {errors.website && <span className="text-danger">Required</span>}
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <input className="" type="checkbox" name="" id="" />
                                <p>You're referring yourself as the candidate.</p>
                            </div>
                            <div>
                                <div className="mt-5">
                                    <h3 className={Styles.refer_form_title}>Recommender</h3>

                                </div>
                                <div className="mb-4">
                                    <label>Recommender Name </label>

                                    <input className="form-control" {...register("website", { required: false })} />
                                </div>
                                <div className="mb-4">
                                    <label>Recommender Email</label>

                                    <input className="form-control" {...register("website", { required: false })} />
                                </div>
                            </div>

                            <div className={Styles.form_candidate}>
                                <div>
                                    <h3 className={Styles.refer_form_title}>Candidate</h3>

                                </div>
                                <div className="mb-4">
                                    <label>Candidate Name <span className="text-danger">*</span></label>

                                    <input className="form-control" {...register("candidate_name", { required: true })} />
                                    {errors.candidate_name && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-4">
                                    <label>Candidate Email <span className="text-danger">*</span></label>

                                    <input className="form-control" {...register("candidate_email", { required: true })} />
                                    {errors.candidate_email && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-4">
                                    <label>Candidate's website or LinkedIn <span className="text-danger">*</span></label>

                                    <input className="form-control" {...register("candidate_website", { required: true })} />
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                            </div>
                            <div className={Styles.form_tell}>
                                <div>
                                    <h3 className={Styles.refer_form_title}>Tell us more!</h3>
                                </div>
                                <div className="mb-5">
                                    <label>Why are you referring this person? What makes this person stand out? <span className="text-danger">*</span></label>

                                    <textarea rows={4} className="form-control" {...register("candidate_website", { required: true })} />
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How familiar are you with this person's work?  <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">Very - fast hand knowledge</option>
                                        <option value="2">Somewhat</option>
                                        <option value="3">Just by reputaion</option>
                                        <option value="4">Not familiar</option>

                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How would you describe them?  <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">Superstar. One of the best people I know.</option>
                                        <option value="2">Great. Great person to have on any team.</option>
                                        <option value="3">Not sure. Need expert to evaluate skill and lavel.</option>
                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How open to new opportunities are they?    <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">Not sure</option>
                                        <option value="2">Somewhat</option>
                                        <option value="3">Very</option>

                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">You attest to their knowledge of being referred to Talentdrop, or a Talentdrop partner company. We'll be checking in with them!     <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">Yes</option>
                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">Would you split your bounty payment with the candidate? <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">Yes - 50/50</option>
                                        <option value="2">Yes - some other split</option>
                                        <option value="3">No</option>


                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                                <div className="mb-5">
                                    <label className="mb-5">How'd you hear about us? <span className="text-danger">*</span></label>

                                    <select className="form-control" {...register("candidate_website", { required: true })} >
                                        <option defaultValue >Select...</option>
                                        <option value="1">YC</option>
                                        <option value="2">Linkedin</option>
                                        <option value="3">Twitter</option>
                                        <option value="3">Twitter</option>
                                        <option value="3">Friend/Colleague</option>
                                        <option value="3">Online Search</option>
                                        <option value="3">Ads</option>
                                        <option value="3">Others</option>
                                    </select>
                                    {errors.candidate_website && <span className="text-danger">Required</span>}
                                </div>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <input className="" type="checkbox" name="" id="" />
                                <p>You agree to the <Link href="/"><a>Terms of Use</a></Link> and the <Link href="/"><a>Privacy Policy.</a></Link></p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <input className={Styles.form_button} type="submit" />
                            </div>
                        </form>

                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Refer;