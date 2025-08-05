import Home from './Home.jsx';
import HypePresale from './HypePresale.jsx';
import PresaleIdo from './PresaleIdo.jsx';
import Launch from './Launch.jsx';
import TokenCreator from './TokenCreator.jsx';
import MemeLauncher from './MemeLauncher.jsx';
import Dashboard from './Dashboard.jsx';
import Docs from './Docs.jsx';
import Community from './Community.jsx';
import Faq from './Faq.jsx';
import Support from './Support.jsx';

/**
 * Central route configuration: path, label, and component
 */
export const routeConfig = [
  { path: '/',            label: 'Home',           Component: Home },
  { path: '/hype-presale',label: '$HYPE Presale',  Component: HypePresale },
  { path: '/presale-ido', label: 'Presale/IDO',    Component: PresaleIdo },
  { path: '/launch',      label: 'Launch',         Component: Launch },
  { path: '/token-creator', label: 'Token Creator', Component: TokenCreator },
  { path: '/meme-launcher', label: 'Meme Launcher', Component: MemeLauncher },
  { path: '/dashboard',   label: 'Dashboard',      Component: Dashboard },
  { path: '/docs',        label: 'Docs',           Component: Docs },
  { path: '/community',   label: 'Community',      Component: Community },
  { path: '/faq',         label: 'FAQ',            Component: Faq },
  { path: '/support',     label: 'Support',        Component: Support }
];
