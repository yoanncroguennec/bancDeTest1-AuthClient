import React from 'react';
import ReactDOM from 'react-dom/client';
// APP
import App from './app/App';
// REDUX
import { Provider } from 'react-redux';
import store from './app/utils/redux/Store'
// UTILS ASSETS STYLES
import "./app/utils/assets/styles/sass/Index.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
