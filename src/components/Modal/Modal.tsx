import ModalBackdrop from "./ModalBackdrop";
import React from "react";

interface IProps extends React.PropsWithChildren{
    showModal: boolean;
    title: string;
    onCloseModal: React.MouseEventHandler;
}
const Modal: React.FC <IProps> = ({showModal, title , onCloseModal ,children}) => {
    return (
        <>
            <ModalBackdrop isShow={showModal} />
            <div onClick={onCloseModal} className="modal show" style={{display: showModal ? 'block' : 'none'}}>
                <div onClick={(e) => e.stopPropagation()} className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button onClick={onCloseModal} type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;