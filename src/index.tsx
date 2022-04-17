import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* styles */
import 'antd/dist/antd.css';
import './styles/index.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'react-circular-progressbar/dist/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
