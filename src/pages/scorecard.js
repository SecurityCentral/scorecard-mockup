import * as React from 'react';
import { Grid } from 'patternfly-react';

const logo = require('../logo.svg');

interface State {
  alertVisible: boolean;
}

class ScorecardPage extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      alertVisible: true
    };
  }

  dismissAlert = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    return (
      <Grid fluid className="container-pf-nav-pf-vertical">
        <div className="page-header">
          <h2>Overview</h2>
        </div>
        <div className="App-body">
          <div className="App-intro">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to the Security Scorecard</h2>
          </div>
        </div>
      </Grid>
    );
  }
}

export default ScorecardPage;
