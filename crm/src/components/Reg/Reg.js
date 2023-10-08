import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RegistrationForm() {

    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, SetLastName] = useState('');
    const [group, setGroup] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8000/registration', { email, first_name, middle_name, last_name, group, password });
            console.log(response.data); // Показать сообщение об успешной регистрации
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    return (
        <div className='backgroundImg'>

            <div className='auth template d-flex justify-content-center align-items-center 100-w vh-100'>

                <div className='p-5 rounded bg-white' style={{ width: '400px', maxWidth: '100%' }}>

                    <h3 className='mb-4 text-center'>Регистрация</h3>

                    <div className='mb-4'>
                        <input type="email" placeholder='Введите email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <input type="text" placeholder='Введите имя' className='form-control' value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <input type="text" placeholder='Введите фамилию' className='form-control' value={last_name} onChange={(e) => SetLastName(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <input type="text" placeholder='Введите отчество' className='form-control' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <input type="text" placeholder='Введите группу' className='form-control' value={group} onChange={(e) => setGroup(e.target.value)} required />
                    </div>

                    <div className='mb-4'>
                        <input type='password' placeholder='Введите пароль' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>

                    {/* <div className='mb-4'>
                            <select name="" id="" className='form-select' aria-label='.form-select example' required>
                                <option value={""} disabled selected>Выберите группу</option>
                                <option value="">ИИПБ-22-1</option>
                                <option value="">ИИПБ-22-2</option>
                            </select>
                        </div> */}

                    <div className='d-grid mb-3'>
                        <button className='btn btn-primary' onClick={handleRegister}>Зарегистрироваться</button>
                    </div>

                    <div>
                        <p className='text-center'>
                            Есть аккаунт? <Link to="/" className='text-decoration-none'>Авторизоваться</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;