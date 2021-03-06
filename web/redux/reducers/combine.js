import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import utilitiesReducer from './utilities';


export default combineReducers({
	reduxAsyncConnect,
	routing: routerReducer,
	utilities: utilitiesReducer,
});
