import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegistrationForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        group: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/registration', formData);
            setSuccessMessage('Регистрация прошла успешно!');
            setTimeout(() => {
                navigate("/");
            }, 2000);

            console.log(response.data); // сообщение об успешной регистрации в консоли
        } catch (error) {
            setErrorMessage('Ошибка при регистрации: ' + error.message);
        }
    };

    return (
        <div className='backgroundImg'>

            <div className="container">
                <div className="row">

                    <div className='auth template d-flex justify-content-center align-items-center 100-w vh-100'>
                        <div className='p-5 rounded bg-white col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 col-xxl-4'>
                            <h3 className='mb-4 text-center'>Регистрация</h3>

                            <form className="form" onSubmit={handleSubmit}>

                                <div className='mb-4'>
                                    <input type="email" name="email" placeholder='Введите email' className='form-control' value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="mb-4">
                                    <input type="text" name="first_name" placeholder='Введите имя' className='form-control' value={formData.first_name} onChange={handleChange} required />
                                </div>
                                <div className="mb-4">
                                    <input type="text" name="last_name" placeholder='Введите фамилию' className='form-control' value={formData.last_name} onChange={handleChange} required />
                                </div>

                                <div className="mb-4">
                                    <input type="text" name="middle_name" placeholder='Введите отчество' className='form-control' value={formData.middle_name} onChange={handleChange} required />
                                </div>

                                <div className="mb-4">
                                    <input type="text" name="group" placeholder='Введите группу' className='form-control' value={formData.group} onChange={handleChange} required />
                                </div>

                                <div className='mb-4'>
                                    <input type='password' name="password" placeholder='Введите пароль' className='form-control' value={formData.password} onChange={handleChange} required />
                                    {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                                    {successMessage && <p className="text-success mt-3">{successMessage}</p>}
                                </div>

                                <div className='d-grid mb-3'>
                                    <button type='submit' className='btn btn-primary'>Зарегистрироваться</button>
                                </div>
                            </form>
                            <div>
                                <p className='text-center'>
                                    Есть аккаунт? <Link to="/" className='text-decoration-none'>Авторизоваться</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
