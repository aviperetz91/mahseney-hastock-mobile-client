import { LOADING, LOGIN, SIGNUP } from '../actions/authActions';

const initialState = {
    token: null,
    userId: null,
    isLoading: false
} 

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case LOGIN: 
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        case SIGNUP: 
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default authReducer;
