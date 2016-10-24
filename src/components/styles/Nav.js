/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

import A from './A';
import { useScreenSize } from '../../containers/responsiveEnhancements';

import type { NavItem } from '../../stores/navigation';

type Props = {
  screenSize: string,
  items: Array<NavItem>,
};

/**
 * The nav bar for the website.
 */
function Nav({ screenSize, items, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      ul: {
        listStyleType: 'none',
      },
      li: {
        float: 'left',
        width: 100,
        marginLeft: 25,
      },
    },
    'screenSize-xs': {
      li: {
        float: 'initial',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
      },
    },
  }, { screenSize });

  return (
    <nav {...otherProps}>
      <ul  style={styles.ul}>
      {items.map((item, index) =>
        <li style={styles.li} key={index}>
          <A {...item} />
        </li>
      )}
      </ul>
    </nav>
  );
}
export default useScreenSize(Nav);
