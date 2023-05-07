import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AuthReducers } from "./Reducers/AuthReducers"


// Combine Reducers
const rootReducer = combineReducers({
  auth: AuthReducers,
});

// Middlewares
const middlewares = [thunk, logger];

// Create Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
