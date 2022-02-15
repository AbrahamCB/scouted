import Link from "next/link";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Layout from "../layout";
import styles from './ProposeBounty.module.css';
const ProposeBounty = () => {
    const [check, setCheck] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
    };
    return (
        <Layout>
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.propose__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.propose__title}>Propose a Bounty</h1>
                            <p>Scouted will approve new bounties on an ongoing basis. <Link href="/for-employers"><a >Learn more</a></Link>.</p>
                        </div>
                        <div className={styles.notice}>
                            <span><svg width='24' viewBox="0 0 24 24" focusable="false" ><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"></path></svg></span>
                            <p>We have an ongoing waitlist for new bounties, but we review new proposals on a regular basis. Fill out the form if you&apos;d like us to get in touch!</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label>Company <span className="text-danger">*</span></label>
                                <input className='form-control' {...register("company_name", { required: true })} />
                                {errors.company_name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Company Website <span className="text-danger">*</span></label>
                                <input className='form-control ' {...register("company_url", { required: true })} />
                                {errors.company_url && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Contact Name <span className="text-danger">*</span></label>
                                <input className='form-control ' {...register("contact_name", { required: true })} />
                                {errors.contact_name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="border-b pb-5 mb-4">
                                <label>Email <span className="text-danger">*</span></label>
                                <input className='form-control ' {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>What role(s) are you trying to fill? Link job descriptions (even a Google doc is fine).  <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("job_description", { required: true })} />
                                {errors.job_description && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>List salary and equity ranges for each role. We need numbers!  <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("equity_numbers", { required: true })} />
                                {errors.equity_numbers && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Where can your candidates to be based?  <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("candidates_base", { required: true })} />
                                {errors.candidates_base && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>Do you sponsor employment visas (e.g. H1B)?   <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("sponsor_visas", { required: true })} />
                                {errors.sponsor_visas && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>List bounty prices for each role. Note whether you&apos;d like to pay your bounties in non-USD currencies (incl. cryptocurrency).   <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("currencies", { required: true })} />
                                {errors.currencies && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>List up to 5 keywords for each of your bounty roles. Specific is better! e.g. typescript, lead, aws, technical sourcer    <span className="text-danger">*</span></label>
                                <textarea rows={3} className='form-control ' {...register("keywords", { required: true })} />
                                {errors.keywords && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <label>How&apos;d you hear about us?    <span className="text-danger">*</span></label>
                                <select className='form-control ' {...register("about_us", { required: true })} >
                                    <option value="">Select...</option>
                                    <option value="YC">YC</option>
                                    <option value="Linkedin">Linkedin</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="Friend/Colleague">Friend/Colleague</option>
                                    <option value="Online Search">Online Search</option>
                                    <option value="Ads">Ads</option>
                                    <option value="Others">Others</option>
                                </select>
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className="mb-4">
                                <input onChange={(e) => setCheck(e.target.checked)} type="checkbox" /> &nbsp;
                                <label>You agree to the <Link href=""><a >Terms of Use</a></Link> and the <Link href="/privacy-policy"><a >Privacy Policy</a></Link>.</label>
                            </div>

                            <input disabled={!check} className='btn btn-primary' value="Send" type="submit" />

                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ProposeBounty;