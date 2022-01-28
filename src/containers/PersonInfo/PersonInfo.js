import React , {Component} from 'react';

class PersonInfo extends Component {

    render () {

        state = {
            PersonInfoForm = {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'آدرس ایمیل'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
                fullName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'آدرس ایمیل'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
            }
        }

        return (
            <div>

            </div>
        );
    }

}

export default PersonInfo;