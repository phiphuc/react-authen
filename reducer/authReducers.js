import { AUTHENTICATION } from '../constants/constants';
const authReducer = (state={token : null}, action) => {
    switch (action.type){
        case AUTHENTICATION:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

export default authReducer