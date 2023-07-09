// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowParagraphs from './ShowParagraphs';
import Welcome from '../routes/Welcome';
import Login from '../routes/Login';
import Register from '../routes/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/Register" element={ <Register /> } /> 
        <Route path="/ShowParagraphs" element={ <ShowParagraphs /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
