import axios from 'axios';

import * as actionTypes from './actionTypes';

export const contactdataStart = () => {
    return {
        type: actionTypes.CONTACTDATA_START
    };
};

export const contactdataSuccess = (address,nameOfTheBusiness,ownerFirstAndLastName,ownerMobileNumber,telephone,userId) => {
    return {
        type: actionTypes.CONTACTDATA_SUCCESS,
        address: address,
        nameOfTheBusiness: nameOfTheBusiness,
        ownerFirstAndLastName: ownerFirstAndLastName,
        ownerMobileNumber: ownerMobileNumber,
        telephone: telephone,
        userId: userId    
    };
};

export const contactdataFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const fetchContactdata = (token,userId) => {
    return dispatch => {
        dispatch(contactdataStart());
        const queryParams = '?auth='+token+'&orderBy="userId"&equalTo="'+localStorage.getItem('userId')+ '"';
        // axios.get('https://tarashkari-test-one-default-rtdb.firebaseio.com/contactdata.json'+queryParams)
        axios.get('http://162.55.9.246/api/v1/customer/contactdata'+queryParams)
            .then( res => {
                const fetchedData = [];
                for (let key in res.data) {
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    });
                }
                localStorage.setItem('contactname',fetchedData[0].ownerFirstAndLastName);
                dispatch(contactdataSuccess(fetchedData[0].address,fetchedData[0].nameOfTheBusiness,fetchedData[0].ownerFirstAndLastName,fetchedData[0].ownerMobileNumber,fetchedData[0].telephone,userId));
                console.log(fetchedData[0].address);
            })
            .catch( err => {
                dispatch(contactdataFail(err));
            });
    };
};