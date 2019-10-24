import axios from 'axios';

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOADING = "LOADING";

export const isLoadingTrue = () => {
    return { type: LOADING }
}

export const signup = (email, password) => {
    return dispatch => {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAl5CH42x2PC_ULtNFBDOIF2Fj9Va9VAlY", {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .then(response => { 
            console.log(response.data);
            dispatch({ type: SIGNUP, token: response.data.idToken, userId: response.data.localId});
        })

    }
}

export const login = (email, password) => {
    return dispatch => {
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAl5CH42x2PC_ULtNFBDOIF2Fj9Va9VAlY", {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .then(response => {
            console.log(response.data);
            dispatch({ type: LOGIN, token: response.data.idToken, userId: response.data.localId});
        })
    }
}