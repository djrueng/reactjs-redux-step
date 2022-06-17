import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index"; // import reducer thay đổi store
const store = createStore(reducers); //Tạo store
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);


// reportWebVitals();