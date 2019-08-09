import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import ReduxThunk from 'redux-thunk';
ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
