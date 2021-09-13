import React from 'react';
import {useAlert} from "./alert/AlertContext";


const Main = () => {
    const {show } = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={()=>show('qwerty')} className={'btn btn-success'}> Показать алерт</button>
        </>
    );
};

export default Main;