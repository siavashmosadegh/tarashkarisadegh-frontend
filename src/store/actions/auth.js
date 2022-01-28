import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (tokenId, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: tokenId,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('contactname');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeOut = (expirationTimeee) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(logout());
        }, expirationTimeee * 1000); 
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'http://162.55.9.246/api/v1/customer/signup'
        // let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBAFdFPze6WE0pt-MdL_DhKJV3lL4b7S1s';
        if (!isSignup) {
            // url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAFdFPze6WE0pt-MdL_DhKJV3lL4b7S1s'
            url = 'http://162.55.9.246/api/v1/customer/signin'
        }
        axios.post(url,authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date (new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                console.log(response.data.idToken);
                console.log(response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeOut(response.data.expiresIn));
            })
            .catch(err => {
                //console.log(err.response.data.error);
                // dispatch(authFail(err.response.data.error));
                //dispatch(authFail(err.data.error));

                // console.log(err);
                console.log(err.response.data.error.message);
                dispatch(authFail(err.response.data.error.message));
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            console.log(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeOut((   expirationDate.getTime() - (new Date()).getTime()  ) / 1000));
            }
        }
    };
};