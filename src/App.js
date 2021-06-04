import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllFleet from './components/AllFleet/AllFleet';

const App = () => {
  return (
  
    <Router>
      <Switch>
        <Route path = '/fleet'>
          <AllFleet/>
        </Route>
        <Route path = '/home'>
          <Home/>
        </Route>
        <Route exact path = '/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    
  );
};

export default App;