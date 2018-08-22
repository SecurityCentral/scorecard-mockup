import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyStateComponent } from '../components/EmptyStateComponent';

const MiddlewarePage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <EmptyStateComponent title="Middleware" />
  </Grid>
);

export default MiddlewarePage;
