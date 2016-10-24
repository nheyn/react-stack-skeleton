/* @flow */
import React from 'react';

type Props = {

};

/**
 * The home page of the website.
 */
export default function Home({ ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      Home Page
    </div>
  );
}
