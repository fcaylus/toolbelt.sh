import { Fingerprint, Keyboard, Palette, Settings, VpnKey } from '@material-ui/icons';
import JavaScriptIcon from './components/JavaScriptIcon';

export interface RouteCategory {
  category: string;
  icon: any;
  routes: Route[];
}

export interface Route {
  name: string;
  icon: any;
  path: string;
}

export const routes: RouteCategory[] = [
  {
    category: 'Generators',
    icon: <Settings />,
    routes: [
      {
        name: 'Password generator',
        icon: <VpnKey />,
        path: '/password',
      },
      {
        name: 'UUID generator',
        icon: <Fingerprint />,
        path: '/uuid',
      },
      {
        name: 'Color generator',
        icon: <Palette />,
        path: '/color',
      },
    ],
  },
  {
    category: 'JavaScript',
    icon: <JavaScriptIcon />,
    routes: [
      {
        name: 'Key event codes',
        icon: <Keyboard />,
        path: '/key-code',
      },
    ],
  },
];
