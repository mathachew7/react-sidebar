import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Team from './pages/Team'
import Message from './pages/Message'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/profile' component={Profile} />
          <Route path='/team' component={Team} />
          <Route path='/messages' component={Message} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
