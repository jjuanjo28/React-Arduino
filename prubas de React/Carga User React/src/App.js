
import './App.css';
import UserListComponent from './components/container/user_list_component';
import React from 'react';
 import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import Home from './pages/home/home';
import Error404 from './pages/404/Error404';
import Auth from './pages/auth/auth';
import TaskListComponent from './components/container/task_list_component';
import AddUser from './pages/Login/addUser';
import LinkUserFormik from './components/pure/forms/link_user_Formik';
function App() {
  return (
    
    
      <Router>
      <Link to="/">|| Home |</Link>
      <Link to="/auth" >| Auth |</Link>
      <Link to="*" >| Error 404 Page |</Link>
      <Link to="/users" >| Login |</Link>
      <Link to="/listUsers" >| List Users ||</Link>
         <Routes>
         
          <Route exact path='/' element={<Home/>}/>
          <Route path="/taskList" element={<TaskListComponent/>} />
          <Route path='/users' element={<AddUser/>} />
          <Route path="/listUsers" element={<AddUser/>} />
          <Route path='/auth' element={<Auth/>}/>
          <Route path='*' element={<Error404/>} />

         </Routes>

      </Router>
   

  );
}

export default App;
