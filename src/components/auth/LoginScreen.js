import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  startGoogle, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui)

    const [ formValues , handleInputChanse ] = useForm({
        email : '',
        password : ''
    });

    const { email , password } = formValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogle() );
    }

    return (
        <>
            <h3 className="auth__tittle"> Login </h3>
            <form action="" onSubmit={handleLogin} className='animate__animated animate__fadeIn animate__faster '>
                <input type="text" placeholder='Email' name="email" value={ email } onChange={ handleInputChanse } className="auth__info" autoComplete="off"/>
                <input type="password" placeholder='Password'  name="password" value={ password } onChange={handleInputChanse} className="auth__info"/>
                <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>Ingresar</button>


                <div className="auth__social-networks" onClick={handleGoogleLogin}>
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link" > Create new acount  </Link>
            </form>
        </>
    )
}
