import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import Players from './Players';
import Teams from './Teams';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
          <Route render={() => <h1 className="text-center">Four oh Four.</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
