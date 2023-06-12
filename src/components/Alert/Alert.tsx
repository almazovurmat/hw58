import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
            className={alertClassName}
            role="alert"
            onClick={clickDismissable ? handleDismiss : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default Alert;
