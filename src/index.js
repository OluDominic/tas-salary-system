import React from 'react';
import ReactDOM from 'react-dom';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
//import DateFnsUtils from '@date-io/date-fns'
import { BrowserRouter } from 'react-router-dom'
//import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);





