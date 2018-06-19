import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./css/init.css";
ReactDOM.render(<App />, document.getElementById('root'), ()=>{
    document.getElementById("loading").style.display = "none";
});

registerServiceWorker();
