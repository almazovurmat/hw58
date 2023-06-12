import React from 'react';

interface IProps extends React.PropsWithChildren {
    type: string;
    onDismiss?: () => void;
}

const Alert: React.FC<IProps> = ({ type, onDismiss, children }) => {
    const alertClassName = `alert alert-${type}`;

    return (
        <div className={alertClassName} role="alert">
            {onDismiss && (
                <button onClick={onDismiss} type="button" className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
            {children}
        </div>
    );
};

export default Alert;
