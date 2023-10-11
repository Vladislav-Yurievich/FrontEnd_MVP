import React, { useState } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';

const ContentManagement = () => {
    const navigate = useNavigate();

    const [options, setOptions] = useState([{ selectedOption: '', inputValue: '' }]);
    const maxOptions = 3; // Максимальное количество опций

    const handleOptionChange = (e, index) => {
        const updatedOptions = [...options];
        updatedOptions[index].selectedOption = e.target.value;
        updatedOptions[index].inputValue = '';
        setOptions(updatedOptions);
    };

    const handleInputChange = (e, index) => {
        const updatedOptions = [...options];
        updatedOptions[index].inputValue = e.target.value;
        setOptions(updatedOptions);
    };

    const handleAddOption = () => {
        if (options.length < maxOptions) {
            setOptions([...options, { selectedOption: '', inputValue: '' }]);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap background-color-main-block">
                <SideBar navigate={navigate} />

                <div className="col-9">
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Управление контентом</p>
                        <hr />

                        <div className="col-5">
                            {options.map((option, index) => (
                                <div key={index}>
                                    <select
                                        className='form-select mt-4'
                                        onChange={(e) => handleOptionChange(e, index)}
                                        value={option.selectedOption}
                                    >
                                        <option value="">Выберите тип</option>
                                        <option value="Заголовок">Заголовок</option>
                                        <option value="Текст">Текст</option>
                                        <option value="Видео">Видео</option>
                                    </select>
                                    <br />

                                    {option.selectedOption === 'Заголовок' && (
                                        <input
                                            type="text"
                                            placeholder="Введите заголовок"
                                            value={option.inputValue}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className='form-control'
                                        />
                                    )}

                                    {option.selectedOption === 'Текст' && (
                                        <textarea
                                            placeholder="Введите текст"
                                            value={option.inputValue}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className='form-control'
                                            rows={5}
                                        />
                                    )}

                                    {option.selectedOption === 'Видео' && (
                                        <input
                                            type="text"
                                            placeholder="Введите ссылку на видео"
                                            value={option.inputValue}
                                            onChange={(e) => handleInputChange(e, index)}
                                            className='form-control'
                                        />
                                    )}
                                </div>
                            ))}
                            <button
                                className='btn btn-secondary mt-4 mb-3'
                                onClick={handleAddOption}
                                disabled={options.length >= maxOptions}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentManagement;
