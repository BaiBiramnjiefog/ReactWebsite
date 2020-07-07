import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { visit } from './visit.js';
import { NoMatch } from './NoMatch';


import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
         
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={visit} />
              <Route component={NoMatch} />
            </Switch>
         
        </Router>
      </React.Fragment>
    );
  }
}

export default App;