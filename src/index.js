import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./css/same.css";
import "./css/init.css";
ReactDOM.render(<App />, document.getElementById('root'), ()=>{
    var tempTimter = setTimeout(()=>{
        document.getElementById("loading").style.display = "none";
        clearTimeout(tempTimter);
    },1000)
    
});

registerServiceWorker();
