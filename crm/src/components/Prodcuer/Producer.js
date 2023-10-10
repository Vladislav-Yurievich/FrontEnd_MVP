import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { fetchUserInfo } from '../../utils/Storage';
import SideBar from './SideBar';

const Producer = () => {
    const navigate = useNavigate();
    const [, setUserInfo] = useState({
        group: '',
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [groups, setGroups] = useState([]);
    const [noResults, setNoResults] = useState(false); // Состояние для отображения сообщения "Ничего не найдено"

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
            // Устанавливаем состояние noResults в true, если результаты поиска пусты
            setNoResults(searchResults.length === 0);
        } catch (error) {
            console.error('Ошибка', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap background-color-main-block">
                <SideBar navigate={navigate} />

                <div className="col-9">

                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Список групп</p>
                        <div className="col-7">
                            <form onSubmit={handleSearchSubmit} className='d-flex'>
                                <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" value={searchQuery} onChange={handleSearchInputChange} required />
                                <button className="btn btn-outline-secondary my-2 my-sm-0 ms-3" type="submit">Поиск</button>
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
                        <a href="/producer/AddCourcesGroup" className='btn btn-secondary mt-4'>Добавить курс</a>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Producer;
