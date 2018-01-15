import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TeamLogo from './TeamLogo';
import { getTeamNames } from '../api';

class Home extends Component {
  state = {
    teamNames: []
  };
  async componentDidMount() {
    let teamNames = await getTeamNames();
    this.setState({ teamNames });
  }
  render() {
    const { teamNames } = this.state;
    return (
      <div className="container">
        <h1 className="large-header">Hash History Basketball League</h1>
        <h3 className="header text-center">Select a team</h3>

        <div className="home-grid">
          {teamNames.map(teamName => (
            <Link key={teamName} to={`/${teamName}`}>
              <TeamLogo id={teamName} width="125px" />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
