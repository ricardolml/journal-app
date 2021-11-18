import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';

import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)


    const [formValues, handleInputChange] = useForm({
        name: 'Ricardo',
        email: 'ricardo.esp@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch( startRegisterWithEmailPasswordName( email , password , name ) )
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('NAME IS REQUIRED'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('EMAIL INVALID'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('PASSWORD SHOULD BE AT LEAST 6 CHARACTERS AND MATCH EACH OTHER'));
            return false;
        }

        dispatch(removeError());
        return true;

    }

    return (
        <>
            <h3 className="auth__tittle"> Registrer </h3>
            <form action="" onSubmit={handleRegister} className='animate__animated animate__fadeIn animate__faster' >

                <input type="text" placeholder='Name' name="name" value={name} onChange={handleInputChange} className="auth__info" autoComplete="off" />
                <input type="text" placeholder='Email' name="email" value={email} onChange={handleInputChange} className="auth__info" autoComplete="off" />
                <input type="password" placeholder='Password' name="password" value={password} onChange={handleInputChange} className="auth__info" />
                <input type="password" placeholder='Confirm' name="password2" value={password2} onChange={handleInputChange} className="auth__info" />

                <button type="submit" className="btn btn-primary btn-block mb-5">Ingresar</button>

                {
                    msgError
                    &&
                    (
                        <div className='auth__alert-error'>
                            {msgError}
                        </div>
                    )
                }

                <Link to="/auth/login" className="link mt-5" > Alredy Registrer?  </Link>
            </form>
        </>
    )
}
