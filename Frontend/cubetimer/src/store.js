import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
//import reducer from './reducers/reducers';
import rootReducer from './redux/reducers'; 

const initialState = {};
const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose (applyMiddleware(...middleware)),
    //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
//const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;