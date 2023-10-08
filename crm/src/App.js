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
import AboutSourcePage from './pages/AboutSource';
import StudentPage from './pages/Student';
import GradePage from './pages/Grade';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route element={<PrivateRoute />}>

            <Route path='/producer' element={<ProducerPage />} />
            <Route path='/producer/profile' element={<ProfileProducerPage />} />
            <Route path='/producer/AboutGroup' element={<AboutGroupPage />} />
            <Route path='/producer/settings' element={<SettingsProducerPage />} />



            <Route path='/inspector' element={<InspectorPage />} />
            <Route path='/inspector/AboutSource' element={<AboutSourcePage />} />
            <Route path='/student' element={<StudentPage />} />
            <Route path='/student/grade' element={<GradePage />} />

          </Route>

          <Route path='/' element={<AuthPage />} />
          <Route path='/reg' element={<RegPage />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
