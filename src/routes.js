import Ipsum from './pages/Ipsum';
import Ipsum1A from './pages/Ipsum-1-A';
import Ipsum1B from './pages/Ipsum-1-B';
import CloudPlatforms from './pages/cloud_platforms';
import PlatformBU from './pages/platform_bu';
import MiddlewareBU from './pages/middleware_bu';

const baseName = '/';

const routes = () => [
  {
    iconClass: 'fa fa-dashboard',
    title: 'Ipsum',
    to: '/',
    component: Ipsum,
    subItems: [
      {
        iconClass: 'fa fa-envelope-open',
        title: 'Item 1-A',
        to: '/ipsum/item-1-A',
        component: Ipsum1A
      },
      {
        iconClass: 'fa fa-envelope-closed',
        title: 'Item 1-B',
        to: '/ipsum/item-1-B',
        component: Ipsum1B
      }
    ]
  },
  {
    iconClass: 'fa fa-star',
    title: 'Cloud Platforms',
    to: '/CloudPlatforms',
    component: CloudPlatforms
  },
  {
    iconClass: 'fa fa-bell',
    title: 'Platform BU',
    to: '/platformbu',
    component: PlatformBU
  },
  {
    iconClass: 'fa fa-shield',
    title: 'Middleware BU',
    to: '/middlewarebu',
    component: MiddlewareBU
  }
];

export { baseName, routes };
