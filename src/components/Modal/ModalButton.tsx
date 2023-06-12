import React, {useState} from 'react';
import Modal from "./Modal";
import {nanoid} from "nanoid";

const ModalButton= () => {
    const [isShow, setIsShow] = useState(false);

    const callAlert = () => (alert());
    const open = () => (setIsShow(true));
    const close = () => (setIsShow(false));

    const btns = [
        {type: 'primary', label: 'Continue', onClick: callAlert},
        {type: 'danger', label: 'Close', onClick: close}
    ];

    return (
        <>
            <button
                className="w-30 btn btn-primary mx-3 my-5"
                type="button"
                onClick={open}>
                Show modal
            </button>
            <Modal onCloseModal={close} showModal={isShow} title={'Some kinda modal title'}>
                <div className="model-body pt-4 mb-2"><p>This is modal content</p></div>
                <div className="model-footer">
                    {
                        btns.map((btn) => {
                            const btnClass = `btn btn-${btn.type} mx-2 mb-3`;
                            return <button key={nanoid()} className={btnClass} type="button"
                                           onClick={btn.onClick}>{btn.label}</button>
                        })
                    }
                </div>
            </Modal>
        </>
    );
};

export default ModalButton;