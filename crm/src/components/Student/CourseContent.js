import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import SideBar from './SideBar';
import { titles } from './config';
import { courseService } from './service';


const CoursePage = () => {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [getContent, loading, error] = useFetching(async () => {
        const content = await courseService.getCourse(id);
        console.log(content.data);
        setContent(content.data.description.items);
    });

    useEffect(() => {
        getContent();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            {content.name}
                        </p>

                        {/* доделать отображение */}
                        {content.map((item) => (
                            <div>
                                {titles.jopa}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}


export default CoursePage;