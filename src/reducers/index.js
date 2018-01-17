import {combineReducers} from 'redux';
import items from './itemReducer';
import users from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const routeReducer = combineReducers({
    items,
    users,
    ajaxCallsInProgress
});

export default routeReducer;