import React from 'react';
import {useState, useEffect } from 'react';

const useForm = (validate) => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState
    (false)

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.values
        });
    };

    //바인딩 해주는 곳 !!
    //회원가입에 중복 가입을 하지 못하게 해준다. 
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };


    return { handleChange, values, handleSubmit, errors};
};

export default useForm
