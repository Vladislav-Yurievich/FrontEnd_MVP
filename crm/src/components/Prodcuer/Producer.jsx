import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { fetchUserInfo } from '../../utils/Storage';
import SideBar from './SideBar';

const Producer = () => {
    const navigate = useNavigate();
    const [, setUserInfo] = useState({ group: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [groups, setGroups] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [isTeam, setIsTeam] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetchUserInfo();
                setUserInfo(info);
                // Запрос при загрузке страницы без поиска
                const response = await axios.get(process.env.REACT_APP_API_URL + '/groups');
                const data = response.data;
                setGroups(data.results);
            } catch (error) {
                console.error('Ошибка', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/groups', {
                params: {
                    search_name: searchQuery,
                    page: 1,
                    items_per_page: 10,
                },
            });
            const data = response.data;
            const searchResults = data.results;
            setGroups(searchResults);
            // ставлю состояние noResults в true, если результаты поиска пусты как моя жизнь
            setNoResults(searchResults.length === 0);
        } catch (error) {
            console.error('Ошибка', error);
        }
    };

    const handleCreateGroup = async (e) => {
        e.preventDefault();

        const data = [
            {
                name: groupName,
                is_team: isTeam,
            }];

        axios.post(process.env.REACT_APP_API_URL + `/create-groups`, data)
            .then(response => {
                setSuccessMessage('Группа успешно создана');
                setErrorMessage('');
                console.log("отправлено", response.data);
            })
            .catch(error => {
                setSuccessMessage('');
                if (error.response) {
                    setErrorMessage(`Ошибка при получении ответа от сервера: ${error.response.data}`);
                    console.error("Ошибка при получении ответа от сервера:", error.response.data);
                } else if (error.request) {
                    setErrorMessage(`Ошибка при выполнении запроса: ${error.request}`);
                    console.error("Ошибка при выполнении запроса:", error.request);
                } else {
                    setErrorMessage(`Ошибка: ${error.message}`);
                    console.error("Ошибка:", error.message);
                }
            });
    };

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap background-color-main-block">
                <SideBar navigate={navigate} />

                <div className="col-9">

                    <div className='sub__main__block'>

                        <div className="col-7">
                            <p className="fw-normal fs-3">Создание группы</p>
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form className='form' onSubmit={handleCreateGroup}>
                                <input type="text" className='form-control mr-sm-2' placeholder='Введите название группы' value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
                                <label className='mt-3 d-flex align-items-center '> Электив <input type="checkbox" className='ms-2' checked={isTeam} onChange={() => setIsTeam(!isTeam)} /></label>
                                <button className='btn btn-secondary mt-3' type="submit">Создать</button>
                            </form>
                        </div>

                        <hr />

                        <div className="col-7">
                            <p className="fw-normal fs-3">Список групп</p>
                            <form onSubmit={handleSearchSubmit} className='d-flex'>
                                <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" value={searchQuery} onChange={handleSearchInputChange} required />
                                <button className="btn btn-outline-secondary my-sm-0 ms-3" type="submit">Поиск</button>
                            </form>
                        </div>
                        <br />

                        <div className="col-7">
                            <div className="list-group">
                                {noResults ? (
                                    <p>Ничего не найдено</p>
                                ) : (
                                    groups.map((group, index) => (
                                        <Link key={index} to={`/producer/AboutGroup/${encodeURIComponent(group.name)}`} className="list-group-item list-group-item-action">
                                            {group.name}
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producer;
