import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './CSS/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
For every componenet, in order for React to understand JSX, we need to import React. However, since App is the
root in the DOM, every component it calls will inherent the import react call above. So need.
*/

