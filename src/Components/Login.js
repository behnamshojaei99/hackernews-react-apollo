import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP, LOGIN } from '../api/mutations';
import { AUTH_TOKEN } from '../constants';
import { useHistory } from 'react-router';

const Login = (props) => {
    const history = useHistory();
    const [formInfo, setForm] = useState({
        login: true,
        email: '',
        name: '',
        password: ''
    });

    const changeHandler = (e) => {
        setForm({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

    const toggleSignInSignUp = () => {
        setForm({
            ...formInfo, 
            login: !formInfo.login
        })
    }

    const [login] = useMutation(LOGIN, {
        variables: {
            email: formInfo.email,
            password: formInfo.password
        },
        onCompleted: ({ login }) => {
            console.log(login)
            localStorage.setItem(AUTH_TOKEN, login.token);
            history.push('/');

        }
    });

    const [signUp] = useMutation(SIGN_UP, {
        variables: {
            email: formInfo.email,
            password: formInfo.password,
            name: formInfo.name
        },
        onCompleted: ({ signup }) => {
            console.log(signup);
            localStorage.setItem(AUTH_TOKEN, signup.token);
            history.push('/');
        }
    });

    return (
        <div>
            <h3 className='mv3'>{formInfo.login ? "Login": "Sign up"}</h3>
            <div className='flex flex-column'>
                {!formInfo.login && (
                    <input name='name' value={formInfo.name} placeholder="Name..." onChange={changeHandler} />
                )}
                <input name='email' value={formInfo.email} placeholder='Email...' onChange={changeHandler} />
                <input name='password' value={formInfo.password} placeholder='Password...' onChange={changeHandler} />
            </div>
            <div className='flex mt3'>
                <button className='pointer button mr2' onClick={formInfo.login ? login : signUp}>
                    {formInfo.login ? 'Login' : 'Create an account'}
                </button>
                <button className='pointer button' onClick={toggleSignInSignUp}>
                    {formInfo.login ? 'need to create an account?' : 'already have an account?'}
                </button>
            </div>
        </div>
    )
};

export default Login;