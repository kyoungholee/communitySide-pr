import {useState, useEffect } from 'react';

const useForm = (callback, validate) => {


    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        grade : '',
        gender : ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value
        });
     };

    //바인딩 해주는 곳 !!
    //회원가입에 중복 가입을 하지 못하게 해준다. 
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
            [errors]
        );


    return { handleChange, values, handleSubmit, errors};
};

export default useForm
