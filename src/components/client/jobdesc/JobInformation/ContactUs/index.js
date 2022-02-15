import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import { postData } from '../../../../../../__lib__/helpers/HttpService';
import styles from '../../JobDesc.module.css';
const ContactUs = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    const [disable, setDisable] = useState()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
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
        <div className={styles.contact__form}>
            <h3 className={styles.form__title}>Contact Us</h3>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='form-control my-3'
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    {...register('name', { required: true, maxLength: 20 })}
                />
                <input
                    className='form-control my-3'
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your E-Mail"
                    {...register('email', { required: true, maxLength: 30 })}
                />
                <textarea
                    style={{ resize: 'none' }}
                    rows={4}
                    maxLength='250'
                    className='form-control my-3'
                    placeholder="Your Message"
                    {...register('message', { required: true, })}
                />
                <button

                    disabled={disable}
                    type="submit"
                    className="btn  btn-primary">

                    {disable ? <BeatLoader color={color} loading={loading} size={12} /> : 'Send'}


                </button>
            </form>
        </div>
    );
};

export default ContactUs;