import React, { useState } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ContentManagement = () => {
    const navigate = useNavigate();

    const [taskFormData, setTaskFormData] = useState({
        taskName: '',
        maxScores: 0,
        options: [{ selectedOption: '', inputValue: '' }],
    });

    const handleMaxScoresChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setTaskFormData({ ...taskFormData, maxScores: value });
    };

    const handleTaskNameChange = (e) => {
        const value = e.target.value;
        setTaskFormData({ ...taskFormData, taskName: value });
    };

    const handleOptionChange = (e, index) => {
        const updatedOptions = [...taskFormData.options];
        updatedOptions[index].selectedOption = e.target.value;
        updatedOptions[index].inputValue = '';
        setTaskFormData({ ...taskFormData, options: updatedOptions });
    };

    const handleInputChange = (e, index) => {
        const updatedOptions = [...taskFormData.options];
        updatedOptions[index].inputValue = e.target.value;
        setTaskFormData({ ...taskFormData, options: updatedOptions });
    };

    const handleAddOption = () => {
        const updatedOptions = [...taskFormData.options, { selectedOption: '', inputValue: '' }];
        setTaskFormData({ ...taskFormData, options: updatedOptions });
    };

    const handleRemoveOption = (index) => {
        const updatedOptions = taskFormData.options.filter((_, i) => i !== index);
        setTaskFormData({ ...taskFormData, options: updatedOptions });
    };

    const handleSave = (e) => {
        e.preventDefault();  // Предотвратить отправку формы

        const items = taskFormData.options.map(option => {
            if (option.selectedOption === 'Заголовок') {
                return { "section_name": option.inputValue };
            } else if (option.selectedOption === 'Текст') {
                return { "text": option.inputValue };
            } else if (option.selectedOption === 'Видео') {
                return { "video_link": option.inputValue };
            }
            return null;
        }).filter(item => item !== null);

        const data = {
            name: taskFormData.taskName,
            max_scores: taskFormData.maxScores,
            is_pattern: true,
            is_open: true,
            author_id: 1,
            type: "FILE",
            description: {
                items
            },
            type_specific_data: {
                max_files: 1
            }
        };

        console.log(data);

        axios.post(process.env.REACT_APP_API_URL + `/create-task`, data)
            .then(response => {
                console.log("Успешно отправлено:", response.data);
            })
            .catch(error => {
                if (error.response) {
                    console.error("Ошибка при получении ответа от сервера:", error.response.data);
                } else if (error.request) {
                    console.error("Ошибка при выполнении запроса:", error.request);
                } else {
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
                        <p className="fw-normal fs-3">Управление контентом</p>
                        <hr />

                        <p className='fs-4'>Создание задания</p>

                        <form className="col-5 flex-row" onSubmit={handleSave}>
                            <div className="mb-3">
                                <input type="text" placeholder="Введите название задания" value={taskFormData.taskName} onChange={handleTaskNameChange} className='form-control' required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="maxScoresInput" className="form-label">Максимальное количество баллов</label>
                                <input type="number" id="maxScoresInput" value={taskFormData.maxScores} onChange={handleMaxScoresChange} className="form-control" min="0" required />
                            </div>

                            {taskFormData.options.map((option, index) => (
                                <div key={index}>
                                    <div className="select-container d-flex align-items-center justify-content-center">
                                        <select
                                            className='form-select'
                                            onChange={(e) => handleOptionChange(e, index)}
                                            value={option.selectedOption}>
                                            <option>Выберите тип</option>
                                            <option value="Заголовок">Заголовок</option>
                                            <option value="Текст">Текст</option>
                                            <option value="Видео">Видео</option>
                                        </select>
                                        <span onClick={() => handleRemoveOption(index)}><i className="bi bi-x fs-3 ms-3"></i></span>
                                    </div>
                                    <br />

                                    {option.selectedOption === 'Заголовок' && (
                                        <input type="text" placeholder="Введите заголовок" value={option.inputValue} onChange={(e) => handleInputChange(e, index)} className='form-control' />
                                    )}

                                    {option.selectedOption === 'Текст' && (
                                        <textarea placeholder="Введите текст" value={option.inputValue} onChange={(e) => handleInputChange(e, index)} className='form-control' rows={5} />
                                    )}

                                    {option.selectedOption === 'Видео' && (
                                        <input type="text" placeholder="Введите ссылку на видео" value={option.inputValue} onChange={(e) => handleInputChange(e, index)} className='form-control' />
                                    )}
                                </div>
                            ))}

                            <div className="d-flex flex-column col-6">
                                <button className='btn btn-outline-secondary mt-4 mb-3' onClick={handleAddOption} type="button">Добавить значение</button>
                                <button className='btn btn-secondary mt-4 mb-3' type="submit">Создать задание</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement;
