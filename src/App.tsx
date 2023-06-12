import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {nanoid} from "nanoid";
import ModalButton from "./components/Modal/ModalButton";
import Alert from "./components/Alert/Alert";
import { IAlertData } from "./types";
import './App.css';

const App = () => {
    const closeAlert = (index: number) => {
        setAlertData(prevAlertData => {
            const updatedAlertData = [...prevAlertData];
            updatedAlertData.splice(index, 1);
            return updatedAlertData;
        });
    };

    const [alertData, setAlertData] = useState<IAlertData[]>([
        { type: 'primary', text: 'Это оповещение типа "primary"', onDismiss: closeAlert, clickDismissable: true },
        { type: 'warning', text: 'Это оповещение типа "warning"', onDismiss: closeAlert, clickDismissable: true },
        { type: 'success', text: 'Это оповещение типа "success"', clickDismissable: false }
    ]);

    return (
        <div className="App container">
            <ModalButton />
            {alertData.map((alert, index) => (
                <motion.div
                    className="w-25 mx-auto"
                    key={nanoid()}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Alert
                        type={alert.type}
                        onDismiss={('onDismiss' in alert) ? () => closeAlert(index) : undefined}
                        clickDismissable={alert.clickDismissable}
                    >
                        {alert.text}
                    </Alert>
                </motion.div>
            ))}
        </div>
    );
};

export default App;
