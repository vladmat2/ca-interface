import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { PassageProvider } from '@passageidentity/passage-react';

import './assets/custom.scss';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PassageProvider appId={process.env.REACT_APP_PASSAGE_APP_ID}>
      <App />
    </PassageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
