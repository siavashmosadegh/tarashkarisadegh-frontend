import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { FormContainer,
         FormRow,
         ErrorMessageDiv,
         Input,
         Form,
         TextArea,
         Button,
         ButtonContainer
} from './styles';

const ContactUsFormVersionTwo = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('پر کردن این فیلد الزامی است'),
            email: Yup.string()
                .required('پر کردن این فیلد الزامی است')
                .email('ایمیل وارد شده نا معتبر است'),
            phone: Yup.string()
                .required('پر کردن این فیلد الزامی است')
                .matches(/(^[0-9]+$)/,'باید فقط شامل ارقام باشد')
                .max(11,'شماره موبایل نمیتواند بیشتر از ۱۱ رقم باشد')
                .min(11,'شماره موبایل نمیتواند کمتر از ۱۱ رقم باشد'),
            message: Yup.string()
                .required('پر کردن این فیلد الزامی است')
        }),
        onSubmit: values => {
            console.log(values);
        }
    });

    let nameError = formik.touched.name && (formik.errors.name !== undefined);
    let emailError = formik.touched.email && (formik.errors.email !== undefined);
    let phoneError = formik.touched.phone && (formik.errors.phone !== undefined);
    let messageError = formik.touched.message && (formik.errors.message !== undefined);

    console.log(formik.errors.phone);

    return (
        <FormContainer>
            <Form onSubmit={formik.handleSubmit}>
                <FormRow>
                    <Input
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="نام و نام خانوادگی"
                        disabledProps={nameError}
                    />
                    {formik.touched.name && formik.errors.name 
                        ?
                        <ErrorMessageDiv>{formik.errors.name}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <Input
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="ایمیل"
                        disabledProps={emailError}
                    />
                    {formik.touched.email && formik.errors.email
                        ?
                        <ErrorMessageDiv>{formik.errors.email}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <Input
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder="شماره موبایل"
                        disabledProps={phoneError}
                    />
                    {formik.touched.phone && formik.errors.phone
                        ?
                        <ErrorMessageDiv>{formik.errors.phone}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>
                <FormRow>
                    <TextArea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder="پیام"
                        disabledProps={messageError}
                    />
                    {formik.touched.message && formik.errors.message
                        ?
                        <ErrorMessageDiv>{formik.errors.message}</ErrorMessageDiv>
                        :
                        null
                    }
                </FormRow>

                <ButtonContainer>
                    <Button type="submit">ثبت</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}

export default ContactUsFormVersionTwo;