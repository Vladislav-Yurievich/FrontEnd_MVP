import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/Auth';
import RegPage from './pages/Reg';
import ProducerPage from './pages/Producer';
import ProfileProducerPage from './pages/ProfileProducer';
import SettingsProducerPage from './pages/SettingsProducer';
import AboutGroupPage from './pages/AboutGroup';
import InspectorPage from './pages/Inspector';
import ContentManagamentPage from './pages/ContentManagment';
import AboutSourcePage from './pages/AboutSource';
import StudentPage from './pages/Student';
import GradePage from './pages/Grade';
import CourseContentPage from './pages/CourseContentPage';

import PrivateRoute from './utils/PrivateRoute';
import AddCourseGroupPage from './pages/AddCourseGroup';

import CourseParticipants from './components/Prodcuer/CourseParticipants';
import CourseScorePage from './pages/CourseScorePage';



function App() {
    return (
        <div className="App">

            <BrowserRouter>

                <Routes>

                    <Route element={<PrivateRoute />}>

                        <Route path='/producer' element={<ProducerPage />} />
                        <Route path='/producer/profile' element={<ProfileProducerPage />} />

                        <Route path='/producer/AboutGroup/:groupName' element={<AboutGroupPage />} />
                        <Route path='/producer/AboutGroup/:groupName/participants/:course_content_id' element={<CourseParticipants />} />

                        <Route path='/producer/settings' element={<SettingsProducerPage />} />

                        <Route path='/producer/AddCourcesGroup' element={<AddCourseGroupPage />} />

                        <Route path='/inspector/content-managament' element={<ContentManagamentPage />} />
                        <Route path='/inspector' element={<InspectorPage />} />
                        <Route path='/inspector/AboutSource' element={<AboutSourcePage />} />
                        <Route path='/student' element={<StudentPage />} />
                        <Route path='/student/course/:id' element={<CourseContentPage />} />
                        <Route path='/student/grade' element={<GradePage />} />
                        <Route path='/student/grade/course/:id' element={<CourseScorePage />} />

                    </Route>

                    <Route path='/' element={<AuthPage />} />
                    <Route path='/reg' element={<RegPage />} />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;
