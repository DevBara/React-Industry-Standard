import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import KeyPoints from './components/KeyPoints'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link className="" to ="/home"> Home</Link>
              </li>
              <li>
                <Link className="" to ="/keypoints"> Key Points</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/KeyPoints" component={KeyPoints} />
          </Switch>
        </div>   
     </Router>
    </div>
  );
}

export default App;
