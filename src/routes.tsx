import {
  Fingerprint,
  HelpOutline,
  Https,
  Keyboard,
  Palette,
  Schedule,
  Settings,
  TextFields,
  VerifiedUser,
  VpnKey,
} from '@material-ui/icons';
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
  category?: string;
}

export const routes: RouteCategory[] = [
  {
    category: 'Generators',
    icon: <Settings />,
    routes: [
      {
        name: 'Password',
        icon: <VpnKey />,
        path: '/password',
      },
      {
        name: 'UUID',
        icon: <Fingerprint />,
        path: '/uuid',
      },
      {
        name: 'Color',
        icon: <Palette />,
        path: '/color',
      },
      {
        name: 'Lorem ipsum',
        icon: <TextFields />,
        path: '/lorem-ipsum',
      },
    ],
  },
  {
    category: 'Auth',
    icon: <Https />,
    routes: [
      {
        name: 'JWT validation',
        icon: <VerifiedUser />,
        path: '/jwt',
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
  {
    category: 'Help',
    icon: <HelpOutline />,
    routes: [
      {
        name: 'Crontab',
        icon: <Schedule />,
        path: '/crontab',
      },
    ],
  },
];
