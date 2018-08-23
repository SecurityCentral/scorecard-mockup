import Scorecard from './pages/scorecard';
import Cloud from './pages/cloud';
import Platform from './pages/platform';
import Middleware from './pages/middleware';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-shield',
    title: 'Scorecard',
    to: '/',
    component: Scorecard,
    subItems: [
    {
      iconClass: 'pf pficon-cloud-security',
      title: 'Cloud',
      to: '/pages/cloud',
      component: Cloud
    },
    {
      iconClass: 'pf pficon-container-node',
      title: 'Platform',
      to: '/pages/platform',
      component: Platform
    },
    {
      iconClass: 'pf pficon-maintenance',
      title: 'Middleware',
      to: '/pages/middleware',
      component: Middleware
    }

    ]
  },
];

export { baseName, routes };
