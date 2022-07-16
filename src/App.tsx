import React, { useState } from 'react'; //import React Component
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar';
import { Home, Footer } from './Home';
import { Login } from './login';
import { FourZeroFour } from './404';
import { TaskForm, Tasks } from './Tasks';

function App() {

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
      {/* Bootstrap Date picker */}
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />
      <Navbar />
      <Routes>
        <Route path='*' element={<FourZeroFour />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Create-Tasks' element={<TaskForm />} />
        <Route path='/Tasks' element={<Tasks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;