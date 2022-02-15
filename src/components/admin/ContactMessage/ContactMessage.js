import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { setMessages } from '../../../../store/Messages/actions';
import Layout from '../Layout/Layout';
import MessageCard from './MessageCard';

const ContactMessage = () => {
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#36d7b7");
    const [hideMessage, setHideMessage] = useState(false)
    const dispatch = useDispatch()
    // const { messages } = useSelector(state => state)
    const { admins, messages } = useSelector(state => state)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        dispatch(setMessages(admins.token))
        setIsLoading(false)
    }, [])
    return (
        <>
            <Layout>

                <div className=" container p-5">
                    <div className='d-flex justify-content-center'>
                        {isLoading && <ScaleLoader color={color} loading={loading} size={12} />}
                    </div>
                    <div className='row gy-5 g-xl-8'>
                        {!messages.isLoading && messages.messageList.length > 0 && messages.messageList?.map((message, i) => <MessageCard key={i} messages={message} />)}
                        {!messages.isLoading && messages.messageList?.length === 0 && <div>
                            <h1 className='text-center'>No Message</h1>
                        </div>}

                    </div>

                </div>
            </Layout>
        </>
    );
};

export default ContactMessage;