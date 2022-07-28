import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: beige;
    border-radius: 30px;
    border: none;
    text-align: right;
`;

export const FormRow = styled.div`
    margin: 10px 0;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
`;

export const ErrorMessageDiv = styled.div`
    color: red;
    width: 50%;
`;

export const Input = styled.input`
    background-color: ${(props) => props.disabledProps === true ? "red" : "white"};
    text-align: right;
    width: 50%;
    border-radius: 25px;
    height: 30px;
`;

export const TextArea = styled.textarea`
    background-color: ${(props) => props.disabledProps === true ? "red" : "white"};
    text-align: right;
    width: 50%;
    border-radius: 15px;
    height: 60px;
`;

export const Button = styled.button`
    width: 170px;
    height: 40px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 15px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;