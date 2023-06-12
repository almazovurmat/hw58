import React, { useState } from 'react';
import ModalButton from "./components/Modal/ModalButton";
import './App.css';
import Alert from "./components/Alert/Alert";
import { IAlertData } from "./types";
import {nanoid} from "nanoid";

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
                <div className="w-25 mx-auto" key={nanoid()}>
                    <Alert type={alert.type}
                           onDismiss={('onDismiss' in alert) ? () => closeAlert(index) : undefined}
                           clickDismissable={alert.clickDismissable}
                    >
                        {alert.text}
                    </Alert>
                </div>
            ))}
        </div>
    );
};

export default App;
