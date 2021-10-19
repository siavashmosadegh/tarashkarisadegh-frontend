// import {emailRegex, floatRegex, mobileRegex, numericRegex, passwordRegex, phoneRegex} from "../../utils/regex";
import {useEffect, useState} from "react";

const required = (value) => {
    // console.log('value', value !== '' && value !== null)
    return value !== '' && value !== null;
}

const maxLength = (value, max) => {
    return value.length <= max
}

const minLength = (value, min) => {
    return value.length >= min
}

const len = (value, count) => {
    return value.length === count
}

const minValue = (value, min) => {
    if (value !== '' && value !== null) {
        return value >= min
    } else {
        return true
    }
}

const maxValue = (value, max) => {
    if (value !== '' && value !== null) {
        return value <= max
    } else {
        return true
    }
}

// const numeric = (value) => {
//     return numericRegex.test(String(value))
// }

// const float = (value) => {
//     return floatRegex.test(String(value))
// }

// const mobile = (value) => {
//     return mobileRegex.test(String(value))
// }

// const phone = (value) => {
//     return phoneRegex.test(String(value))
// }

// const email = (value) => {
//     if (value !== '' && value !== null) {
//         return emailRegex.test(String(value))
//     } else {
//         return true
//     }
// }

// const mobileOrEmail = (value) => {
//     return emailRegex.test(String(value)) || mobileRegex.test(String(value))
// }

// const password = (value) => {
//     if (value !== '' && value !== null) {
//         return passwordRegex.test(String(value))
//     } else {
//         return true
//     }
// }

// const repeatPassword = (value, password) => {
//     return value === password
// }


export function InputValidation(props) {
    const [valid, setValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)

    useEffect(() => {
        console.log('valid',valid);
    },[valid])
    const validations = {
        required: {
            validate: () => required(props.value === null ? '' : props.value ? props.value.trim() : props.value),
            message: () => ('این فیلد لازم است')
        },
        objRequired: {
            validate: () => required(props.value),
            message: () => ('این فیلد لازم است')
        },
        maxLength: {
            validate: (max) => maxLength(props.value ? props.value.trim() : props.value, max),
            message: (max) => (`نباید بیشتر از ${max} کاراکتر باشد`)
        },
        minLength: {
            validate: (min) => minLength(props.value ? props.value.trim() : props.value, min),
            message: (min) => (`نباید کمتر از ${min} کاراکتر باشد`)
        },
        len: {
            validate: (count) => len(props.value, count),
            message: (count) => (`باید ${count} کاراکتر باشد`)
        },
        min: {
            validate: (min) => minValue(props.value, min),
            message: (min) => (`نباید کمتر از ${min} باشد`)
        },
        max: {
            validate: (max) => maxValue(props.value, max),
            message: (max) => (`نباید بیشتر از ${max} باشد`)
        },
        // numeric: {
        //     validate: () => numeric(props.value ? String(props.value).trim() : props.value),
        //     message: () => ('عدد صحیح باید باشد')
        // },
        // float: {
        //     validate: () => float(props.value),
        //     message: () => ('عدد صحیح یا اعشار باید باشد')
        // },
        // mobile: {
        //     validate: () => mobile(props.value ? props.value.trim() : props.value),
        //     message: () => ('شماره موبایل نامعتبر')
        // },
        // phone: {
        //     validate: () => phone(props.value ? props.value.trim() : props.value),
        //     message: () => ('شماره تلفن ثابت نامعتبر')
        // },
        // email: {
        //     validate: () => email(props.value ? props.value.trim() : props.value),
        //     message: () => ('ایمیل نامعتبر')
        // },
        // mobileOrEmail: {
        //     validate: () => mobileOrEmail(props.value ? props.value.trim() : props.value),
        //     message: () => ('شماره موبایل یا ایمیل نامعتبر')
        // },
        // password: {
        //     validate: () => password(props.value ? props.value.trim() : props.value),
        //     message: () => ('الگوی رمز عبور نامعتبر')
        // },
        // repeatPassword: {
        //     validate: (password) => repeatPassword(props.value ? props.value.trim() : props.value, password),
        //     message: () => ('با رمز عبور مطابقت ندارد')
        // },
    }

    useEffect(() => {
        let validated = true;
        console.log(props.value);
        Object.keys(props.validations).every((item) => {
            validated = validations[item].validate(props.validations[item])
            if (!validated) {
                setValid(false)
                setErrorMessage(validations[item].message(props.validations[item]))
                return false
            }
            return true
        })
        if (validated) {
            setValid(true)
        }
    }, [props.value, props.validations])

    useEffect(() => {
        if (props.onChange) {
            props.onChange(valid)
        }
    }, [valid])


    return (
        <div className={`relative ${props.className ? props.className : ''}`} style={props.style ? props.style : {}}>
            {props.children}
            <span
                className={`absolute right-2 duration-200 ease-out ${valid || props.customValidation ? '-bottom-3 opacity-0' : '-bottom-5'} ${props.size ? props.size : 'text-xs'} text-custom-red-light`}>{errorMessage}</span>
        </div>
    )
}