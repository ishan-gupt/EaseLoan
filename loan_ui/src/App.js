import React  from 'react';
import Home from './components/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Loanform from './components/loanform';
import Signup from './components/signup';
import Profile from './components/profile';
import Loanlist from  './components/loanstatus.js';
import Dashboard from './components/dashboard';
import "./App.css"

function App() {
    document.title = "EaseLoan"
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<Home/>}></Route>
        <Route exact path="/loanform" element={<Loanform/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/profile"element={<Profile/>}></Route>
        <Route exact path="/dashboard"element={<Dashboard/>}></Route>
        <Route exact path="/loanstatus" element={<Loanlist/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
