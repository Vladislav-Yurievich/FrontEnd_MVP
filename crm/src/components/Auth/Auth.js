import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../utils/Storage';

const Auth = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault(); // Предотвращение стандартного поведения формы

        if (email.length === 0 || password.length === 0) {
            setErrorMessage('Введите email и пароль');
            return; // Выход из функции, чтобы не отправлять запрос без данных
        }

        axios
            .post(process.env.REACT_APP_API_URL + '/login', {
                email: email,
                password: password,
            })
            .then(function (response) {
                console.log(response);

                if (response.data.message === 'Login failed') {
                    setErrorMessage('Неверная почта или пароль');
                } else {
                    navigate('/Producer');
                    setToken(response.data.AccessToken);
                }
            })
            .catch(function (error) {
                if (error.response && error.response.status === 401) {
                    setErrorMessage('Неверная почта или пароль!'); // Ошибка 401 - данные неверны
                } else {
                    console.log(error, 'error');
                    setErrorMessage('Произошла ошибка при входе');
                }
            });
    };
    return (

        <div className='backgroundImg'>

            <div className="container">
                <div className="row">
                    <div className='auth template d-flex justify-content-center align-items-center 100-w vh-100'>

                        <div className='p-5 rounded bg-white col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 col-xxl-4'>

                            <h3 className='mb-4 text-center'>Авторизация</h3>

                            <form className="form" onSubmit={handleLogin}>

                                <div className='mb-4'>
                                    <input type="email" placeholder='Введите email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className='mb-4'>
                                    <input type='password' placeholder='Введите пароль' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    {errorMessage && <p className="error-message mt-3 text-danger">{errorMessage}</p>}
                                </div>

                                <div className='d-grid mb-3'>
                                    <button type='submit' className='btn btn-primary'>Авторизоваться</button>
                                </div>

                            </form>

                            <div className='mb-2 d-flex justify-content-between'>
                                <div>
                                    <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                                    <label htmlFor="check" className='custom-input-label ms-2'>Запомнить меня</label>
                                </div>
                                <div>
                                    <Link to="/respassword" className='text-decoration-none'>Забыли пароль?</Link>
                                </div>
                            </div>

                            <div>
                                <p className='text-center'>
                                    Нет аккаунта? <Link to="/reg" className='text-decoration-none'>Зарегистрироваться</Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Auth;