import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render((
    <>
        <GlobalStyles />
        <App />
    </>
), document.getElementById('root'));
serviceWorker.register();
