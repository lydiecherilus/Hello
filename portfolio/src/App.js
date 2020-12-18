import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Router >
        <NavLink className='navlink' to='/'>Home</NavLink>
        <NavLink className='navlink' to='/projects'>Projects</NavLink>
        <NavLink className='navlink' to='/education'>Education</NavLink>
        <NavLink className='navlink' to='/contact'>Contact</NavLink>

        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/education' component={Education} />
        <Route path='/contact' component={Contact} />
      </Router>
    </div>
  );
};
export default App;
