import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import KeyTopics from './components/KeyTopics'
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
                <Link className="" to ="/Home"> Home</Link>
              </li>
              <li>
                <Link className="" to ="/keytopics"> Key Topics</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/KeyTopics" component={KeyTopics} />
          </Switch>
        </div>
     </Router>
     <Footer />   
    </div>
  );
}

export default App;
