import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

/* styles */
import 'antd/dist/antd.css';
import './styles/index.css';
import 'react-circular-progressbar/dist/styles.css';
// import 'node_modules/video-react/dist/video-react.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
