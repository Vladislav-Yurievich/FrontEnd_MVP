import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import SideBar from './SideBar';
import { titles } from './config';
import { courseService } from './service';


const TEMP_RESPONSE_GET_TASK_CONTENT = {
    "id": "65283ac63914a7635a9c5a19",
    name: "Какое-то Задание",
    "max_scores": 90,
    "is_pattern": true,
    "is_open": true,
    "author_id": 1,
    "author_name": "Johnov John Johnovich",
    "type": "FILE",
    "description": {
        "items": [
            {
                "section_name": "Тема №1"
            },
            {
                "text": "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
            },
            {
                "video_link": "https://www.youtube.com/embed/qb_A96DBjjM"
            },
            {
                "section_name": "Заголовок 2"
            },
            {
                "text": "Блок с текстом большой текст тексттексттексттексттексттексттексттексттекст тексттексттекст текст текст текст"
            },
            {
                text: "фывфывфывфывф фывфывфывфывф фывфывфывфывф фывфывфывфывф"
            },
            {
                text: "цукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзхцукенгшщзх цукенгшщзх"
            }
        ]
    },
    type_specific: null
}


const CoursePage = () => {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [getContent, loading, error] = useFetching(async () => {
        setContent(TEMP_RESPONSE_GET_TASK_CONTENT);
    });

    useEffect(() => {
        getContent();
    }, []);

    const items = {
        section_name: (title, key) => (
            <div key={key} className="fw-normal fs-4 border-bottom">
                {title}
            </div>
        ),
        text: (text, key) => (
            <div key={key}>
                {text}
            </div>
        ),
        video_link: (link, key) => (
            <iframe
                key={key}
                width="560"
                height="315"
                src={link}
            />
        ),
    }


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            {content?.name} #{content?.id}
                        </p>
                        <div className='gap'>
                            {content?.description.items.map((item, index) => {
                                const [[key, value]] = Object.entries(item);
                                return items[key](value, `${key}${index}`);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CoursePage;