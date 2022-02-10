
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'react-timeago';
import { setMessages } from '../../../../store/Messages/actions';
import { authPost } from './../../../../__lib__/helpers/HttpService';

const MessageCard = ({ messages }) => {


    const { id, name, email, message, created_at } = messages
    const [showMessage, setShowMessage] = useState(false)
    const { admins } = useSelector(state => state)
    const dispatch = useDispatch()
    const deleteMessage = () => {
        authPost(`/contact/${id}`, {}, admins.token)
            .then(res => {
                // toast.success('Message deleted successfully.')
                dispatch(setMessages(admins.token))
            })

    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="col-xl-4 col-md-6">
                <div className="card card-xl-stretch mb-xl-8" >
                    <div className='card-body rounded p-5'  >
                        <div className=" bg-light-info rounded p-5" style={{ height: '225px' }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div onClick={() => setShowMessage(!showMessage)} className='d-flex align-items-center' style={{ cursor: 'pointer' }}>
                                    <span className="svg-icon svg-icon-success me-5">
                                        <span className="svg-icon svg-icon-1">
                                            <i className="fas fa-envelope text-success" style={{ fontSize: '20px' }}></i>
                                        </span>
                                    </span>
                                    <div className="flex-grow-1 me-2">
                                        <span className="fw-bolder text-gray-800 text-hover-primary fs-6">
                                            {name}
                                        </span>
                                        <span className="text-muted fw-bold d-block">{email} </span>
                                        <span className='text-warning'><TimeAgo date={created_at} /></span>
                                    </div>

                                </div>
                                <span className="fw-bolder text-warning py-1">
                                    <i onClick={deleteMessage} className="fas fa-trash" style={{ cursor: 'pointer' }}></i>
                                </span>
                            </div>
                            <div>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageCard;