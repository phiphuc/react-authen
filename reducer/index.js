import { combineReducers }  from 'redux';
import  foo from './foo';
import  auth from './authReducers';

const rootReducer = combineReducers({
    foo: foo,
    auth
});

export default rootReducer