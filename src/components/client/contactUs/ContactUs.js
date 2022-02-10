
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import { postData } from '../../../../__lib__/helpers/HttpService';
import Layout from './../layout/index';
import styles from './ContactUs.module.css';
const ContactUs = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [disable, setDisable] = useState(false)
    const onSubmit = data => {
        setDisable(true)
        postData('/contact', data, setDisable)
            .then(res => {
                if (res.success) {
                    toast.success(res.message)
                    reset()
                }
            })
    };
    return (
        <Layout>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <section>
                <div className={`${styles.toggle__container} container d-flex justify-content-center`}>
                    <div className={styles.contact__area}>
                        <div className="text-center mb-5">
                            <h1 className={styles.contact__title}>Contact Us</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-4'>
                                <label>Name</label>
                                <input className='form-control' {...register("name", { required: true })} />
                                {errors.name && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label>Email</label>
                                <input className='form-control' {...register("email", { required: true })} />
                                {errors.email && <span className='text-danger'>This field is required</span>}
                            </div>
                            <div className='mb-4'>
                                <label>Message</label>
                                <textarea
                                    maxLength='250'
                                    style={{ resize: 'none' }}
                                    rows={5} className='form-control'
                                    {...register("message", { required: true })} />
                                <p style={{ textAlign: 'right', marginRight: '5px', marginTop: '-19px' }}>

                                    <span className={`${watch().message?.length === 250 && 'text-danger'}`}>{watch().message?.length || 0}/250</span>
                                </p>
                                {errors.message && <span className='text-danger'>This field is required</span>}

                            </div>
                            <button
                                disabled={disable}
                                type="submit"
                                className="btn  btn-primary">

                                {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Send'}


                            </button>
                        </form>
                    </div>
                </div>
            </section >
        </Layout >
    );
};

export default ContactUs;