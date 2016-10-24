/* @flow */
export type NavItem = { to?: string, href?: string, label: string };

/**
 * The data for the navigation of the site.
 */
const menuItems: Array<NavItem> = [
  { label: 'Home', to: '/' },
  { label: 'Internal Link', to: '/internal' },
  { label: 'External Link', href: 'https://google.com' },
];

export default {
  menuItems,
};
