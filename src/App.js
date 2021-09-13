import React from 'react';
import Main from "./Main";
import Alert from "./alert/Alert";
import {AlertProvider} from "./alert/AlertContext";

const App = () => {
    return (
        <AlertProvider value={alert}>
            <div className={'container pt-3'}>
                <Alert />
                <Main toggle={()=>{}} />
            </div>
        </AlertProvider>

    );
};

export default App;
