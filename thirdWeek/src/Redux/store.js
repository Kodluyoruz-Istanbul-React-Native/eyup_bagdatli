
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { user } from './reducers/user';
import { statusbar } from './reducers/statusbar';


const combinedReducers = combineReducers({
    user,
    statusbar
});


const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;