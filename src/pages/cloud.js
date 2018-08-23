import * as React from 'react';
import { Grid } from 'patternfly-react';
import { EmptyStateComponent } from '../components/EmptyStateComponent';

const CloudPage = () => (
  <Grid fluid className="container-pf-nav-pf-vertical">
    <EmptyStateComponent title="Cloud" />
  </Grid>
);

export default CloudPage;
