import React from 'react';

interface IProps {
    isShow: boolean
}
const ModalBackdrop: React.FC <IProps> = ({isShow}) => {
    return (
        <div
            className="modal-backdrop show"
            style={{display: isShow ? 'block' : 'none'}}
        />
    );
};

export default ModalBackdrop;