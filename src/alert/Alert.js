import React from 'react';
import {useAlert} from "./AlertContext";



const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.hide}>
            Это очень важное сообщение
            {alert.text}
        </div>
    );
};

export default Alert;