import './App.css';
import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import Stopwatch from './components/Stopwatch';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useMatch,
} from 'react-router-dom';

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
            <Link to={'/components'}>Components</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/components'}>
            <ComponentHomePage />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

function HomePage() {
  return <div>Home</div>;
}

function ComponentHomePage() {
  const { path, url } = useMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/counter`}>Counter</Link>
        </li>
        <li>
          <Link to={`${url}/counterhook`}>Counterhook</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${path}/counter`}>
          <Counter step={1} />
        </Route>
        <Route path={`${path}/counterhook`}>
          <CounterHook step={1} />/
        </Route>
      </Routes>
    </div>
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
