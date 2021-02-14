import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './Clock'
import * as serviceWorker from './serviceWorker';
import Toggle from './Toggle';

function tick(){
  ReactDOM.render(
    <React.StrictMode>
    {/* <Clock date = {new Date()}/> */}
    <Toggle/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
setInterval(tick,1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
