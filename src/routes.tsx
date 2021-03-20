import {
  Fingerprint,
  HelpOutline,
  Https,
  Keyboard,
  Link,
  Palette,
  Settings,
  TextFields,
  Update,
  VerifiedUser,
  VpnKey,
} from '@material-ui/icons';
import JavaScriptIcon from './components/icons/JavaScriptIcon';
import CssIcon from './components/icons/CssIcon';
import ShellIcon from './components/icons/ShellIcon';

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
    category: 'CSS',
    icon: <CssIcon />,
    routes: [
      {
        name: 'SVG URL-encoder',
        icon: <Link />,
        path: '/svg-url-encoder',
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
        icon: <Update />,
        path: '/crontab',
      },
      {
        name: 'Shell',
        icon: <ShellIcon />,
        path: '/shell',
      },
    ],
  },
];
