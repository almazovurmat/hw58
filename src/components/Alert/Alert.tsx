import React from 'react';

interface IProps extends React.PropsWithChildren {
    type: string;
    onDismiss?: () => void;
    clickDismissable?: boolean;
}

const Alert: React.FC<IProps> = ({ type, onDismiss, clickDismissable, children }) => {
    const alertClassName = `alert alert-${type}`;

    const handleDismiss = () => {
        if (onDismiss) {
            onDismiss();
        }
    };

    return (
        <div className={alertClassName} role="alert" onClick={clickDismissable ? handleDismiss : undefined}>
            {children}
        </div>
    );
};

export default Alert;
