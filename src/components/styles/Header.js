/* @flow */
import React from 'react';
import reactCSS from 'reactcss';

import { useScreenSize } from '../../containers/responsiveEnhancements';

type Props = {
  screenSize: string,
  title: string,
  menu: React.Element<*>,
};

/**
 * The header for the website.
 */
function Header({ screenSize, title, menu, ...otherProps }: Props): React.Element<*> {
  const styles = reactCSS({
    'default': {
      header: {
        width: '100%',
        height: 150,
        backgroundColor: "black",
      },
      title: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
      },
      menu: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
    },
    'screenSize-xs': {
      header: {
        height: 100,
      },
      title: {
        top: 5,
      },
      menu: {
        top: 5,
      },
    },
  }, { screenSize });

  return (
    <header style={styles.header} {...otherProps}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.menu}>{menu}</div>
    </header>
  );
}
export default useScreenSize(Header);