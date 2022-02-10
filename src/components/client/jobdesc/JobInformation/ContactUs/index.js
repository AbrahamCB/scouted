import { useForm } from 'react-hook-form';
import styles from '../../JobDesc.module.css';
const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
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
                    className='form-control my-3'
                    placeholder="Your Message"
                    {...register('message', { required: true, maxLength: 300 })}
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;