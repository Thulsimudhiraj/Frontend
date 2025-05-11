//we r loading app here
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainApp from './MainApp';

import {Provider} from 'react-redux';
import {createStore} from "redux"
import rootReducer from './Reducers/rootReducer';
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <Provider store={store}>
          <MainApp/>
    </Provider>
     
);
//mainapp is child of provider
//


