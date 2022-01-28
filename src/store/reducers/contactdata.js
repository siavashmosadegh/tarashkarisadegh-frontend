import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    address: null,
    nameOfTheBusiness: null,
    ownerFirstAndLastName: null,
    ownerMobileNumber: null,
    telephone: null,
    userId: null,
    error: null,
    loading: false,
    //authRedirectPath: '/'
};

const contactdataStart = (state,action) => {
    return updateObject(state, {error: null,loading: true});
}

const contactdataSuccess = (state,action) => {
    return updateObject(state, {
        address: action.address,
        nameOfTheBusiness: action.nameOfTheBusiness,
        ownerFirstAndLastName: action.ownerFirstAndLastName,
        ownerMobileNumber: action.ownerMobileNumber,
        telephone: action.telephone,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const contactdataFail = (state,action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.CONTACTDATA_START: return contactdataStart(state, action);
        case actionTypes.CONTACTDATA_SUCCESS: return contactdataSuccess(state,action);
        case actionTypes.CONTACTDATA_FAIL: return contactdataFail (state,action);
        default:
            return state;
    }
};

export default reducer;