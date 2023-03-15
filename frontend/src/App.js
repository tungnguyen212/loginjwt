import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/secret' element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
