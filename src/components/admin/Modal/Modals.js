import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody } from 'reactstrap';
import { modalToggle } from "../../../../store/settings/actions";



const Modals = ({ children }) => {

    const { settings } = useSelector(state => state)
    const dispatch = useDispatch();
    return (


        <Modal

            centered
            isOpen={settings.modal}
            toggle={() => dispatch(
                modalToggle(settings.modal)
            )}
        >
            <ModalBody>
                {children}

            </ModalBody>

        </Modal>

    );
};

export default Modals;