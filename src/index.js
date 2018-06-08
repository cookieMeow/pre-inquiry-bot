import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import ConnectedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import {reducer} from './reducer/SampleReducer.js';
import React from 'react';
import thunk from 'redux-thunk';

let store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(  
    <Provider store={store}>  
        <ConnectedApp />  
    </Provider>,  
    document.getElementById('root')  
)
registerServiceWorker();
