import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form,
         FormContainer,
         FormRow,
         Input,
         ErrorMessageDiv,
         TextArea,
         ButtonContainer,
         Button
} from './styles';

const ContactDataForm = () => {

    const formik = useFormik({
        initialValues: {
            ownersName: "",
            companysName: "",
            companysPhone: "",
            ownersPhone: "",
            address: ""
        },
        validationSchema: Yup.object({
            ownersName: Yup.string()
                .required('پر کردن این فیلد الزامی است'),
            companysName: Yup.string()
                .required('پر کردن این فیلد الزامی است'),
            companysPhone: Yup.string()
                .required('پر کردن این فیلد الزامی است')
                .matches(/(^[0-9]+$)/,'باید فقط شامل ارقام باشد'),
            ownersPhone: Yup.string()
                .required('پر کردن این فیلد الزامی است')
                .matches(/(^[0-9]+$)/,'باید فقط شامل ارقام باشد')
                .min(11,'شماره موبایل نمیتواند کمتر از ۱۱ رقم باشد')
                .max(11,'شماره موبایل نمیتواند بیشتر از ۱۱ رقم باشد'),
            address: Yup.string()
                .required('پر کردن این فیلد الزامی است')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    let ownerNameError = formik.touched.ownersName && (formik.errors.ownersName !== undefined);
    let companyNameError = formik.touched.companysName && (formik.errors.companysName !== undefined);
    let companysPhoneError = formik.touched.companysPhone && (formik.errors.companysPhone !== undefined);
    let ownersPhoneError = formik.touched.ownersPhone && (formik.errors.ownersName !== undefined);
    let addressError = formik.touched.address && (formik.errors.address !== undefined);

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <FormRow>
                    <Input
                        id="ownersName"
                        name="ownersName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ownersName}
                        placeholder="نام و نام خانوادگی صاحب کسب و کار"
                        disabledProps={ownerNameError}
                    />
                    {formik.touched.ownersName && formik.errors.ownersName 
                        ?
                        <ErrorMessageDiv>{formik.errors.ownersName}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <Input
                        id="companysName"
                        name="companysName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.companysName}
                        placeholder="نام مکانیکی"
                        disabledProps={companyNameError}
                    />
                    {formik.touched.companysName && formik.errors.companysName 
                        ?
                        <ErrorMessageDiv>{formik.errors.companysName}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <Input
                        id="companysPhone"
                        name="companysPhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.companysPhone}
                        placeholder="تلفن مکانیکی"
                        disabledProps={companysPhoneError}
                    />
                    {formik.touched.companysPhone && formik.errors.companysPhone 
                        ?
                        <ErrorMessageDiv>{formik.errors.companysPhone}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <Input
                        id="ownersPhone"
                        name="ownersPhone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ownersPhone}
                        placeholder="موبایل صاحب مکانیکی"
                        disabledProps={ownersPhoneError}
                    />
                    {formik.touched.ownersPhone && formik.errors.ownersPhone 
                        ?
                        <ErrorMessageDiv>{formik.errors.ownersPhone}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <TextArea
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder="آدرس"
                        disabledProps={addressError}
                    />
                    {formik.touched.address && formik.errors.address
                        ?
                        <ErrorMessageDiv>{formik.errors.address}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>

                <ButtonContainer>
                    <Button>ثبت</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}

export default ContactDataForm;