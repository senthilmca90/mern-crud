import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [
    thunk
  ]
  const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export default createStore(rootReducer, withDevTools(
    applyMiddleware(...middleware)
  ))
