import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Players from './Players';
import Teams from './Teams';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/players" component={Players} />
        <Route path="/teams" component={Teams} />
      </div>
    </Router>
  );
};

export default App;
