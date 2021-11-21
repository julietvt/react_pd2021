import './App.css';
import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import Stopwatch from './components/Stopwatch';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Switch } from 'react-router';

/*
<Router>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={(<h2>Contacts</h2>)} />
        <Route path="*" element={<NotFound />} />
    </Routes>
</Router>
*/
/*
const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};
*/

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/counter'}>Counter</Link>
          </li>
          <li>
            <Link to={'/counterhook'}>Counterhook</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" element={<Stopwatch />} />
          <Route path="/counter" element={<Counter step={1} />} />
          <Route path="/counterhook" element={<CounterHook step={1} />} />
        </Switch>
      </Router>
    </>
  );
}

/*
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/counterhook" element={<CounterHook />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Routes>
      </Router>
    </>
  );
};
*/
export default App;
